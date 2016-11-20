var words = require('./phdata.js');

module.exports = {

    inserted: function(el, binding, vnode) {


        var val = binding.arg,
            el = el,
            numSentences,
            numParagraphs,
            p_match,
            s_match

        if (!val) return
        
        p_match = val.match(/(\d+)p/)
        s_match = val.match(/(\d+)s/)

        if (p_match !== null) {
            numParagraphs = parseInt(p_match[1], 10)
        } else {
            numParagraphs = false;
        }

        if (s_match !== null) {
            numSentences = parseInt(s_match[1], 10)
        } else {
            numSentences = false;
        }

        populate(numParagraphs, numSentences, el)

        function randomInt(min, max) {

            return Math.floor(Math.random() * (max - min + 1)) + min

        }

        function createSentence(sentenceLength) {

            var wordIndex,
                sentence

            sentenceLength = sentenceLength || randomInt(5, 20)
            wordIndex = randomInt(0, words.length - sentenceLength - 1)

            sentence = words.slice(wordIndex, wordIndex + sentenceLength)
                .join(' ')
                .replace(/\,$/g, '') + '.'

            return sentence.charAt(0).toUpperCase() + sentence.slice(1)

        }


        function createSentences(numSentences) {
            var sentences = []

            numSentences = numSentences || randomInt(3, 7)
            for (var i = 0; i < numSentences; i++) {
                sentences.push(createSentence())
            }
            return sentences.join(' ')
        }

        function createParagraph(numSentences) {
            var sentences = createSentences(numSentences)
            return "<p>" + sentences + "</p>"
        }


        function createParagraphs(numParagraphs, numSentences) {
            var paragraphs = [],
                randomInt = randomInt

            numParagraphs = numParagraphs || randomInt(3, 7)
            for (var i = 0; i < numParagraphs; i++) {
                paragraphs.push(createParagraph(numSentences))
            }

            return paragraphs.join('\n')
        }

        function populate(numParagraphs, numSentences, el) {
            var contents

            if (numParagraphs || !numSentences) {
                contents = createParagraphs(numParagraphs, numSentences)
            } else {
                contents = createSentences(numSentences)
            }

            el.innerHTML = contents
        }

    }
}
