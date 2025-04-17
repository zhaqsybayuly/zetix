function fixHyphens(text) {
    // "Google-дың" сияқты бас әріптен басталатын сөздерді сақтау
    return text.replace(/(?<![A-Z])(\w+)-\s*(\w+)/g, '$1$2');
}
