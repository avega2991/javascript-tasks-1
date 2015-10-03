var hours = process.argv[2];
var minutes = process.argv[3];

var ints    = [50, 40, 10, 9, 5, 4, 1],
    romans 	= ["L", "XL", "X", "IX", "V", "IV", "I"],
    asciiDict = {"L" : [ "(_)      ",
                         "(_)      ",
                         "(_)      ",
                         "(_)      ",
                         "(_)(_)(_)" ],

                 "X" : [ "(_)   (_)", 
                         " (_) (_) ", 
                         "   (_)   ",
                         " (_) (_) ", 
                         "(_)   (_)"  ],

                 "V" : [ "(_)     (_)",
                         " (_)   (_) ", 
                         "  (_) (_)  ", 
                         "   (_ _)   ",
                         "    (_)    "  ],

                 "I" : [ " (_) ", 
                         " (_) ", 
                         " (_) ",
                         " (_) ",
                         " (_) " ],

                 "N" : [ "(_)     (_)", 
                         "(_ _)   (_)",
                         "(_) (_) (_)",
                         "(_)   (_ _)",
                         "(_)     (_)", ],

                 ":" : [ "   (_)(_)   ",
                         "   (_)(_)   ",
                         "            ",
                         "   (_)(_)   ",
                         "   (_)(_)   "]};

function isValid(hours, minutes)
{
    var hoursInt = parseInt(hours);
    var minutesInt = parseInt(minutes);

    var hValid = (hoursInt >= 0 && hoursInt < 24);
    var mValid = (minutesInt >= 0 && minutesInt < 60);

    return (hValid && mValid);
}

function intToRoman(number)
{
    if (number == 0)
    {
        return 'N';
    }

    var result = '';
    var intsLen = ints.length;
    for (var i = 0; i < intsLen; ++i) 
    {
        while (number >= ints[i]) {
            result += romans[i];
            number -= ints[i];
        }
    }

    return result;
}

function romanToGraph(roman)
{
    var result = '';
    for (var row = 0; row < 5; ++row)
    {
        var romanLen = roman.length;
        for(var col = 0; col < romanLen; ++col)
        {
            result += asciiDict[ roman[col] ][row];
        }
        result += '\n';
    }

    return result;
}

if (!isValid(hours, minutes))
{
    console.log("Time is incorrect");
    return;
}

var hoursRoman = intToRoman(hours);
var minutesRoman = intToRoman(minutes);

var time = hoursRoman + ":" + minutesRoman;

console.log(romanToGraph(time));
