function detectText(text) 
{
let languageNames = ['English', 'Русский', 'Հայերեն']

let languageSimboles = 
[
    ['a', 'b', 'c', 'd', 'c', 'd', 'e', 'f', 'g','h', 'i','j', 'k','l', 'm','n', 'o','p','q','r','s','t','u','v','w','x','y','z'],
    ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'],
    ['ա','բ','գ','դ','ե','զ','է','ը','թ','ժ','ի','լ','խ','ծ','կ','հ','ձ','ղ','ճ','մ','յ', 'ն','շ','ո','չ','պ','ջ','ռ','ս','վ','տ','ր','ց','ւ','փ','ք','և','օ','ֆ']
]

let foundLanguages = new Array();

for (var i = 0; i < text.length; i++) 
{
    for (var j = 0; j < languageSimboles.length; j++) 
    {
        if(languageSimboles[j].includes(text.charAt(i).toLowerCase()))
        {
            if(!foundLanguages.includes(j))
            {
                foundLanguages.push(j)
            }
        }
    }
}

if(foundLanguages.length > 0)
{
    for (var i = 0; i < foundLanguages.length; i++) 
    {
        console.log(languageNames[foundLanguages[i]])
    }
}
else
{
    console.log('Unable to detect the language.')
}

}

detectText('բարև')

