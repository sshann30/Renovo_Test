// step 1: split account number into array
// step 2: split multiplying number into array
// step 3: if statement: left to right read normally, right to left revert sequence
// step 4: find number of digits in account number array 
// step 5: have digits in multiplying number array match number of digits in account number array in repeating sequence
// step 6: actual multiplication
var accountNumberOutput = []
var multiplyingNumberOutput = []
var new_multiplyingNumberOutput = []
var newArray = []
function multiplyBy() {
    {
        // step 1: split account number into array
        var accountNumber = document.getElementById("accountNumber").value;

        sNumber = accountNumber.toString();

        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            accountNumberOutput.push(+sNumber.charAt(i));
        }

        console.log(accountNumberOutput, "this is accountNumberOutput");

        // step 2: split multiplying number into array
        var multiplyingNumber = document.getElementById("multiplyingNumber").value;
        var multiplyingNumberOutput = [],
            sNumber = multiplyingNumber.toString();

        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            multiplyingNumberOutput.push(+sNumber.charAt(i));
        }

        console.log(multiplyingNumberOutput, "this is multiplyingNumberOutput");

         // step 3: if statement:

         // right to left revert sequence
        if (document.getElementById('valid2').selected == true) {
            // var multiplyingNumberOutput = new_multiplyingNumberOutput
            multiplyingNumberOutput.reverse();
            console.log(new_multiplyingNumberOutput);

        }
        // // left to right read normally,
        else {
            console.log(new_multiplyingNumberOutput);
        };

        // step 4,5 and 6 solved via for loop
        var arr1 = accountNumberOutput
        var arr2 = multiplyingNumberOutput
        longerArray = arr1.length > arr2.length ? arr1 : arr2
        shorterArray = longerArray === arr1 ? arr2 : arr1
        var j = 0
        var newArray = []
        for (var i = 0; i < longerArray.length; i++ , j++) {
            if (j >= shorterArray.length) {
                j = 0
            }
            newArray.push(longerArray[i] * shorterArray[j])
            console.log(i, j)
        }
        console.log(newArray)

    }

    // pushing result
    document.getElementById("accountNumberOutput").innerHTML = (accountNumberOutput);
    document.getElementById("multiplyingNumberOutput").innerHTML = (multiplyingNumberOutput);
    document.getElementById("answer").innerHTML = (newArray);

}






