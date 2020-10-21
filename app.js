const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const c = a + b

    if (!a) {
        return res.status(400).send("a is NaN. you must send two numbers")
    }

    if (!b) {
        return res.status(400).send("b is NaN. you must send two numbers")
    }

    const answer = `The sum of ${a} and ${b} is ${c}`
    res.send(answer)
})

app.get('/cipher', (req, res) => {
    const reqText = req.query.text
    const reqShift = req.query.shift

    if(!reqText) {
        return res.status(400).send('text is rqrd')
    }

    if(!reqShift) {
        return res.status(400).send('cipher shift is rqrd')
    }

    const shiftNum = parseInt(reqShift)

    if (!shiftNum) {
        return res.status(400).send('cipher shift must be a number')
    }

    const cipher = reqText.toUpperCase()

    const encoder = {
        A : 1,
        B : 2,
        C : 3,
        D : 4,
        E : 5,
        F : 6,
        G : 7,
        H : 8,
        I : 9,
        J : 10,
        K : 11,
        L : 12,
        M : 13,
        N : 14,
        O : 15,
        P : 16,
        Q : 17,
        R : 18,
        S : 19,
        T : 20,
        U : 21,
        V : 22,
        W : 23,
        X : 24,
        Y : 25,
        Z : 26
}

    function generateNewCipherNums (cipherNum, encoder, shift) {
        let newCipherNums = []
        for (let i = 0; i < cipherNum.length; i++) {
            
        }
        console.log(newCipherNums)
    }
    
    function generateCipher(cipher, encoder, shift) {
        let cipherNum = [];
        // loop through each character of the name
        for (let i = 0; i < cipher.length; i++) {
            // check for a match in the encoder object
            let newCharacter = encoder[cipher[i]];
            // if there's a match, add the character to the end of the new name
            if (newCharacter) {
                cipherNum += newCharacter;
            }
        }
        console.log(cipherNum)
        generateNewCipherNums(cipherNum, encoder, shift);
    }
    
    generateCipher (cipher, encoder, reqShift)


});

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
});