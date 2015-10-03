var hours = process.argv[2];
var minutes = process.argv[3];


var ints 	= [50, 40, 10, 9, 5, 4, 1],
    romans 	= ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
    asciiDict = {'L' : [ "(_)      ",
						 "(_)      ",
						 "(_)      ",
						 "(_)      ",
						 "(_)(_)(_)" ],

				 'X' : [ "(_)   (_)", 
				 		 " (_) (_) ", 
				 		 "   (_)   ",
				 		 " (_) (_) ", 
				 		 "(_)   (_)"  ],

				 'V' : [ "(_)     (_)",
				 		 " (_)   (_) ", 
				 		 "  (_) (_)  ", 
				 		 "   (_ _)   ",
				 		 "    (_)    "  ],

				 'I' : [ " (_) ", 
				 		 " (_) ", 
				 		 " (_) ",
				 		 " (_) ",
				 		 " (_) " ],

				 'N' : [ "(_)     (_)", 
				 		 "(_ _)   (_)",
				 		 "(_) (_) (_)",
				 		 "(_)   (_ _)",
				 		 "(_)     (_)", ],

				 ':' : [ "  (_)(_)  ",
				 		 "  (_)(_)  ",
				 		 "          ",
				 		 "  (_)(_)  ",
				 		 "  (_)(_)  "]};

function isValid(hours, minutes)
{
	return (hours >= 24 || minutes >= 60) ? false : true;
}

function intToRoman(number)
{
	var result = '';
    for (var i = 0; i < ints.length; i++) 
    {
    	if (number == 0)
    	{
    		result += 'N';
    		break;
    	}
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
	for (var row = 0; row < 5; row++)
	{
		for(var col = 0; col < roman.length; col++)
		{
			result += asciiDict[ roman.charAt(col) ][row];
		}
		result += '\n';
	}

	return result;
}


function main()
{
	if (!isValid(hours, minutes))
	{
		console.log("Time is incorrect");
		return;
	}

	var hoursRoman = intToRoman(hours);
	var minutesRoman = intToRoman(minutes);

	var time = hoursRoman + ':' + minutesRoman;

	console.log(romanToGraph(time));
}

main();
