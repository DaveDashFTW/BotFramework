export interface Strings {
    title: string,
    send: string,
    unknownFile: string,
    unknownCard: string,
    receiptTax: string,
    receiptTotal: string
    messageRetry: string,
    messageFailed: string,
    messageSending: string,
    timeSent: string,
    consolePlaceholder: string
}

interface LocalizedStrings {
    [locale: string]: Strings
}

const localizedStrings: LocalizedStrings = {
    'en-us': {
        title: "How do I....",
        send: "Send",
        unknownFile: "[File of type '%1']",
        unknownCard: "[Unknown Card '%1']",
        receiptTax: "Tax",
        receiptTotal: "Total",
        messageRetry: "retry",
        messageFailed: "couldn't send",
        messageSending: "sending",
        timeSent: " at %1",
        consolePlaceholder: "Type your message..."
    },
    'de-de': {
        title: "Chat",
        send: "Senden",
        unknownFile: "[Datei vom Typ '%1']",
        unknownCard: "[Unbekannte Card '%1']",
        receiptTax: "MwSt.",
        receiptTotal: "Gesamtbetrag",
        messageRetry: "wiederholen",
        messageFailed: "konnte nicht senden",
        messageSending: "sendet",
        timeSent: " am %1",
        consolePlaceholder: "Verfasse eine Nachricht..."
    },
    'pl-pl': {
        title: "Chat",
        send: "Wyślij",
        unknownFile: "[Plik typu '%1']",
        unknownCard: "[Nieznana karta '%1']",
        receiptTax: "Podatek",
        receiptTotal: "Razem",
        messageRetry: "wyślij ponownie",
        messageFailed: "wysłanie nieudane",
        messageSending: "wysyłanie",
        timeSent: " o %1",
        consolePlaceholder: "Wpisz swoją wiadomość..."
    },
	'ru-ru': {
        title: "Чат",
        send: "Послать",
        unknownFile: "[Неизвестный тип '%1']",
        unknownCard: "[Неизвестная карта '%1']",
        receiptTax: "Такса",
        receiptTotal: "Всего",
        messageRetry: "Повторить",
        messageFailed: "невозможно отправить",
        messageSending: "отправка",
        timeSent: " в %1",
        consolePlaceholder: "Введите ваше сообщение..."
    },
    'lv-lv': {
        title: "Tērzēšana",
        send: "Sūtīt",
        unknownFile: "[Nezināms tips '%1']",
        unknownCard: "[Nezināma kartīte '%1']",
        receiptTax: "Nodoklis",
        receiptTotal: "Kopsumma",
        messageRetry: "Mēģināt vēlreiz",
        messageFailed: "Neizdevās nosūtīt",
        messageSending: "Nosūtīšana",
        timeSent: " %1",
        consolePlaceholder: "Ierakstiet savu ziņu..."
    },
    'pt-br': {
        title: "Bate-papo",
        send: "Enviar",
        unknownFile: "[Arquivo do tipo '%1']",
        unknownCard: "[Cartão desconhecido '%1']",
        receiptTax: "Imposto",
        receiptTotal: "Total",
        messageRetry: "repedit",
        messageFailed: "não pude enviar",
        messageSending: "enviando",
        timeSent: " às %1",
        consolePlaceholder: "Digite sua mensagem..."
    }
}

export const defaultStrings = localizedStrings['en-us'];

// Returns strings using the "best match available"" locale
// e.g. if 'en-us' is the only supported English locale, then
// strings('en') should return localizedStrings('en-us')

export const strings = (locale: string) => {
    if (locale.startsWith('de'))
        locale = 'de-de';
    else if (locale.startsWith('pl'))
        locale = 'pl-pl';
    else if (locale.startsWith('ru'))
        locale = 'ru-ru';
    else if (locale.startsWith('lv'))
        locale = 'lv-lv';
    else if (locale.startsWith('pt'))
        locale = 'pt-br';
    else
        locale = 'en-us';

    return localizedStrings[locale];
}