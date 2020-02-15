/* Destructuring Assignment yaitu kita bisa mengambil elemen2 dari setiap array / properti2 dari 
setiap object untuk dimasukkan ke dalam variabel baru dengan cara yg lebih singkat */

//cara lama
const halo = ["Halo", "Nama", "Saya", "Udin"];

const salam = halo[0];
console.log(salam);

//cara baru (Destructuring Assignment)
/* a akan berisi index ke 0 dari array halo */
const [a] = halo;
console.log(a);

/* jika mau mengambil semua elemen maka berikan variable sesuai
dengan jumlah index yg ada di array halo */
const [b, c, d, e] = halo;
console.log(b, c, d, e);

/* kita juga bisa melewatkan beberapa elemen array, contohnya kita hanya akan 
 mengambil index ke 1 [Nama] dan index ke 3 [Udin] saja, dengan cara koma tetap ditulis tapi
 kosongkan variable nya */
const [, f, , g] = halo;
console.log(f, g);

/* Kita juga bisa mengubah posisi setiap elemen array */
let mhs = ["Udin", 20];
let [i, j] = mhs;
console.log(i, j);

//kita rubah posisi Udin yg semula berada di variable i ke variable j dan sebaliknya
[i, j] = [j, i];
console.log(i, j);


// Destructuring Assignment ini juga bisa dilakukan pada object
let mhs2 = {
	nama : 'Anto',
	semester : 2
};

//untuk menampilkan nama pada biasanya kita menggunakan cara berikut
console.log(mhs2.nama);

// Dengan Destructuring Assignment kita bisa membuat penulisan nya lebih singkat
/* Nb : Pada array kita bisa membuat nama variable dengan nama bebas, Hal ini tidak berlaku pada 
object, untuk object penulisan nama variable harus disesuaikan dengan yg ada pada properti */
const {nama, semester} = mhs2;
console.log(nama, semester);

/* Akan tetapi jika kita tetap ingin membuat nama variable dengan singkat pada object tetap bisa 
dengan cara berikut */
let mhs3 = {
	nama : 'Siti',
	semester : 4
};

let {nama: nm, semester: sms} = mhs3;
console.log(nm, sms);

/* Kita juga bisa memberikan nilai default pada object, contoh di dalam object mhs4 tidak ada
property email, kita bisa memberikan / membuat properti email dengan nilai default pada Destructuring
Assignment*/
let mhs4 = {
	name : 'Siti',
	umur : 20
};

let {name, umur, email = "default@email.com"} = mhs4;
console.log(email);

/*Tetapi jika pada object terdapat property email maka secara otomatis variable email akan 
mengambil nilai yg ada pada property email yg terdapat dalam object dan mengabaikan nilai default*/
let mhs5 = {
	alamat : 'jln. ketupat',
	umr : 20,
	email1 : 'budi123@yahoo.com'
};

let {alamat, umr, email1 = "default@email.com"} = mhs5;
console.log(email1);


