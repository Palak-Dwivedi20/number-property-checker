function checkNumber() {
    const num = parseInt(document.getElementById("numInput").value);
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if(isNaN(num)) {
        resultDiv.innerHTML = "<p>Please enter a valid number.</p>";
        return;
    }

    const results = [
        {
            label: "Palindrome",
            value: isPalindorme(num)
        },
        {
            label: "Armstrong",
            value: isArmstrong(num)
        },
        {
            label: "Perfect Number",
            value: isPerfect(num)
        },
        {
            label: "Prime",
            value: isPrime(num)
        },
        {
            label: "Even/Odd",
            value: num % 2 === 0 ? 'Even' : 'Odd'
        }
    ];

    results.forEach(item => {
        const div = document.createElement("div");
        div.className = "result-item";
        div.innerHTML = `<span>${item.label}:</span> ${item.value === true ? '✅ Yes' : item.value === false ? '❌ No' : item.value}`;
        resultDiv.appendChild(div);
    });

    document.getElementById("numInput").value = "";
}

function isPalindorme(n) {
    const str = n.toString();
    return str === str.split('').reverse().join('');
}

function isArmstrong(n) {
    const digit = n.toString().split("");
    const power = digit.length;
    const sum = digit.reduce((acc, d) => acc + Math.pow(parseInt(d), power), 0);
    return sum === n;
}


function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}