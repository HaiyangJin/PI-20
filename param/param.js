
// Experiment parameters
var isBaoleiji = false;
var isCredamo = false;
if (window.location.hostname.startsWith('10.12.3.158')) {
    isBaoleiji = true;
    console.log('Running on Baoleiji network.');
} else if (window.location.hostname.includes('credamo.com')) {
    isCredamo = true;
    console.log('Running on Credamo platform.');
}
const exp_name = "PI20";

// ZSTU Baoleiji
const url_zstublj = 'http://10.12.3.158/facetest/lib/save_data.php'; // zstu baoleiji server

// var saveincomplete = true; // local
// var to_incomplete = false; // send to incomplete link

// const failcode = ['Nanyang', 'Xinxiang', 'Hangzhou'];
// const url_complete = "https://haiyangjin.github.io/exps/testable.html?cc=NZ";
// const url_incomplete = "https://haiyangjin.github.io/exps/testable.html?cc=AD";

