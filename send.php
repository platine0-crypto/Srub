<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Telegram bot configuration
$botToken = 'YOUR_BOT_TOKEN'; // Replace with your actual bot token
$chatId = 'YOUR_CHAT_ID';     // Replace with your actual chat ID

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['success' => false, 'message' => 'Invalid input data']);
    exit();
}

// Prepare message for Telegram
$message = "🔔 *Новая заявка с сайта NORD-LINE*\n\n";

// Determine the subject based on the form type
$subject = "Заявка";
if (isset($input['type']) && $input['type']) {
    $subject = "Заявка: Подбор проекта";
    $message .= "*Тип объекта:* " . getObjectType($input['type']) . "\n";
    $message .= "*Бюджет:* " . getBudgetRange($input['budget']) . "\n";
    $message .= "*Срок начала:* " . getTiming($input['timing']) . "\n\n";
} elseif (isset($input['action']) && $input['action'] === 'test-drive') {
    $subject = "Заявка: Тест-Драйв";
}

$message .= "*Имя:* " . ($input['name'] ?? 'Не указано') . "\n";
$message .= "*Телефон:* " . ($input['phone'] ?? 'Не указано') . "\n";
$message .= "*Email:* " . ($input['email'] ?? 'Не указано') . "\n";
$message .= "*Дата:* " . date('d.m.Y H:i:s') . "\n";

// Send message to Telegram
$url = "https://api.telegram.org/bot{$botToken}/sendMessage";
$data = [
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'Markdown'
];

$options = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data)
    ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result) {
    $response = json_decode($result, true);
    if ($response['ok']) {
        echo json_encode(['success' => true, 'message' => $subject]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Telegram API error']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to connect to Telegram API']);
}

/**
 * Helper function to convert type code to readable text
 */
function getObjectType($type) {
    switch($type) {
        case 'spa':
            return 'SPA-Резиденция';
        case 'usadba':
            return 'Усадьба';
        case 'lounge':
            return 'Lounge-зона';
        default:
            return $type;
    }
}

/**
 * Helper function to convert budget code to readable text
 */
function getBudgetRange($budget) {
    switch($budget) {
        case 'low':
            return 'До 2 млн ₽';
        case 'medium':
            return '2-5 млн ₽';
        case 'high':
            return 'Более 5 млн ₽';
        default:
            return $budget;
    }
}

/**
 * Helper function to convert timing code to readable text
 */
function getTiming($timing) {
    switch($timing) {
        case 'soon':
            return 'В этом году';
        case 'next':
            return 'В следующем году';
        case 'planning':
            return 'Пока планирую';
        default:
            return $timing;
    }
}
?>