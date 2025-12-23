//Variable
/*const myName = 'Mamank Tamvan';
const myAge = 24;
const myFullName = `Nama saya ${myName}, umur saya ${myAge} tahun.`;
const myCity = 'Jogjakarta';
const apel = 5000;
const pisang = 10000;
const diskon = 0.1;
const totalPrice = 3 * apel + 2 * pisang;
const total = totalPrice - (totalPrice * diskon);

console.log(total);
console.log(totalPrice);*/




/*// Boolean 
Boolean 
var data = false;
if (data) {
    console.log("Sangad Tamvan");
} else {
    console.log("Ente kadang2 Tamvan");
}
// Number
var angka = 100;
console.log(angka + 5); // Output: 105*/

/*const haveproductstock = false;
if (haveproductstock) {
    console.log("Product Tersedia");
} else {
    console.log("Product Tidak Tersedia");
}*/

/*//Comparison Operators
if (10 > 5) {
    console.log("Benar");
} else {
    console.log("Salah");
}
if (8< 4) {
    console.log("Benar");
} else {
    console.log("Salah");
}
if (-1 >= 2) {
    console.log("Benar");
} else {
    console.log("Salah");
}
if (0.5 <= 0) {
    console.log("Benar");
} else {
    console.log("Salah");
}*/

/*//Logical Operators
const firstCondition = true;
const secondCondition = true;
if (firstCondition && secondCondition) {
    console.log("Kedua kondisi benar");
} else {
    console.log("Salah satu atau kedua kondisi salah");
}

const umur = 17;
const memilikiKTP = true;

// Kondisi: Memasukkan bioskop hanya jika umur >= 17 DAN memilikiSIM adalah true
if (umur >= 18 && memilikiKTP === true) {
  console.log("Anda bisa Watch Netflix n Chill.");
} else {
  console.log("Maaf ya dek tunggu 18 Tahun.");
}

// Output di console: Anda bisa masuk dan mengendarai.*/

/*const value = 'false' !=='true';
console.log(value);

const value1 = 'abc' ==='abc';
console.log(value1);

const value2 = 'cab' ==='cba';
console.log(value2);

const value3 = 'false' ==='false';
console.log(value3);*/


/*const number = 567;
if (number >= 10 && number < 100) {
    console.log(`${number} adalah puluhan`);
} else if (number >= 1 && number < 10) {
    console.log(`${number} adalah satuan`);
} else if (number >= 100 && number < 1000) {
    console.log(`${number} adalah ratusan`);
} else if (number >= 1000) {
    console.log(`${number}`);
} else {
    console.log(`${number} YNTKTS`);
}*/
  

/*
const person = {
    name: 'Mamank Tamvan',
    age: 24,
    address: 'Jogjakarta',
    tahunLahir: 2001,
    haveJob: false,
};
//cara 1 tampilkan properti objek
console.log(person.name,'lahir pada tahun',person.tahunLahir);
//cara 2 tampilkan properti objek
const text = person.name + ' tinggal di ' + person.address;
console.log(text);



const userName = [
    'Andi',
    'Beni',
    'Candra',
    'Dodi',
    'Edi'

];
const newUsername = 'Gani';

const isUsed = userName.includes('Andi');
const isTaken = userName.includes(newUsername);
console.log('Apakah Andi sudah terdaftar?', isUsed);

if (isTaken) {
    console.log('Username sudah terdaftar, silakan pilih yang lain');
} else {
    console.log('Username tersedia, silakan daftar');
}

const avengers = [
    'Iron Man',
    'Captain America',
    'Hulk',
    'Mega',
    'Black Widow',
    'Hawkeye',
    'Doctor Strange'
];
console.log(avengers[0]);
console.log(avengers[6]);
const numberOfAvengers = avengers.length;
console.log('Jumlah Avenger:', numberOfAvengers);

const hasThor = avengers.includes('Thor');
console.log('Apakah Thor termasuk Avenger?', hasThor);


const merkSepatu = 'adidas';
const ukuranSepatu = 42;
const warnaSepatu = 'Hitam';
const hargaSepatu = null;

const sepatu = {
    merk: merkSepatu,
    ukuran: ukuranSepatu,
    warna: warnaSepatu,
    harga: hargaSepatu
};
console.log('sepatu saya merk '+ sepatu.merk);
console.log('dengan ukuran '+ sepatu.ukuran);
console.log('berwarna '+ sepatu.warna);
console.log('dengan harga '+ sepatu.harga);


function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Mamank Tamvan'));

function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10));

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
console.log(factorial(0));
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Mamank Tamvan'));   
console.log(reverseString('JavaScript'));
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([3, 5, 1, 8, 2]));
console.log(findMax([-10, -5, -1, -8, -2]));
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
} 
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));

function multiplyByTwo(number) {
    return number * 2;
}
console.log(multiplyByTwo(5));
console.log(multiplyByTwo(10));


function sayName(name, age) {    
    console.log('Happy Birthday ' + age + ' yo ' + name);
}
sayName('Awan', 25);
sayName('Bulan', 30);
sayName('Mentari', 20);

function logNumberType(number) {
    if (number > 0) {
        console.log(number + ' adalah bilangan positif');
    } else if (number < 0) {
        console.log(number + ' adalah bilangan negatif');
    } else {
        console.log(number + ' Neutral');
    }
} 
logNumberType(10);
logNumberType(-5);
logNumberType(0);


function add(x, y){
    const z = x + y;
    console.log(x + ' ditambah ' + y + ' sama dengan ' + z);
};
add(5, 10);


const firstname = 'Maman';
const lastname = 'Tamvan';


function getFullName(firstname, lastname) {
  const fullName = firstname + ' ' + lastname;
  return fullName;
   
};
const fullName = getFullName(firstname, lastname);
console.log(fullName);



function multiply(x, y) {
    const z = x * y;
    return z;
}
const result = multiply(6, 2);
console.log(result);

// --- 1. Definisi Function (Sekali Saja) ---
// Function ini bertanggung jawab untuk menggabungkan nama depan dan belakang.
function getFullName(firstName, lastName) {
  // Mengembalikan hasil penggabungan string
  return firstName + ' ' + lastName;
}

// --- 2. Penggunaan Function (Tiga Kali) ---

// Nama Lengkap Pertama
const namaDepan1 = 'Rian';
const namaBelakang1 = 'Hidayat';
const namaLengkap1 = getFullName(namaDepan1, namaBelakang1);

// Nama Lengkap Kedua
const namaDepan2 = 'Siska';
const namaBelakang2 = 'Wijaya';
// Kita bisa langsung memanggil function tanpa membuat variabel sementara
const namaLengkap2 = getFullName(namaDepan2, namaBelakang2);

// Nama Lengkap Ketiga (Bisa juga menggunakan string literal langsung)
const namaLengkap3 = getFullName('Dedi', 'Kurniawan');


// --- 3. Output Hasil ---
console.log("Nama ke-1:", namaLengkap1);
console.log("Nama ke-2:", namaLengkap2);
console.log("Nama ke-3:", namaLengkap3);


const sayBye = (name) => {
    console.log('Bye, ' + name);
};
sayBye('Mamank Tamvan');

const add = (x, y) => x + y;
const result = add(7, 3);
console.log(result);*/


const isAge = nama => 24 + ' adalah umur ' + nama;
console.log(isAge('Mamank'));