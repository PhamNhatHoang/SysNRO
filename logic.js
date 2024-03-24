function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function tinhtoan() {
    // Lấy giá trị từ các ô input sư
    var hpg = parseFloat($('#hpg').val()) || 0;
    var cswan = parseFloat($('#cswan').val()) || 0;
    var ptctr = parseFloat($('#ptctr').val()) || 0;
    var ptvpdl = parseFloat($('#ptvpdl').val()) || 0;
    var ptvan = parseFloat($('#ptvan').val()) || 0;
    var ptpet = parseFloat($('#ptpet').val()) || 0;
    var ptbtc2 = parseFloat($('#ptbtc2').val()) || 0;
    var ptdh = parseFloat($('#ptdh').val()) || 0;

    var ptao = parseFloat($('#ptao').val()) || 0;
    var ptwan = parseFloat($('#ptwan').val()) || 0;
    var ptgang = parseFloat($('#ptgang').val()) || 0;
    var ptjay = parseFloat($('#ptjay').val()) || 0;
    var ptrada = parseFloat($('#ptrada').val()) || 0;
    var ptglt = parseFloat($('#ptglt').val()) || 0;
    var ptsach = parseFloat($('#ptsach').val()) || 0;

    // Lấy giá trị từ các ô input đệ
    var hpgDe = parseFloat($('#hpgDe').val()) || 0;
    var cswanDe = parseFloat($('#cswanDe').val()) || 0;
    var ptctrDe = parseFloat($('#ptctrDe').val()) || 0;

    var ptaoDe = parseFloat($('#ptaoDe').val()) || 0;
    var ptwanDe = parseFloat($('#ptwanDe').val()) || 0;
    var ptgangDe = parseFloat($('#ptgangDe').val()) || 0;
    var ptjayDe = parseFloat($('#ptjayDe').val()) || 0;
    var ptradaDe = parseFloat($('#ptradaDe').val()) || 0;

    // Lấy giá trị của các checkbox Item
    var checkbox1Checked = $('#checkbox1').prop('checked');
    var checkbox2Checked = $('#checkbox2').prop('checked');
    var checkbox3Checked = $('#checkbox3').prop('checked');
    var checkbox4Checked = $('#checkbox4').prop('checked');
    var checkbox5Checked = $('#checkbox5').prop('checked');
    var checkbox6Checked = $('#checkbox6').prop('checked');
    var checkbox7Checked = $('#checkbox7').prop('checked');
    var checkbox8Checked = $('#checkNappa').prop('checked');
    var checkbox9Checked = $('#checkNappaDe').prop('checked');
    var checkbox10Checked = $('#checkRong').prop('checked');

    // Lấy gtri cho các checkbox 8s 9s
    var checkbox8sAChecked = $('#checkbox8sA').prop('checked');
    var checkbox8sWChecked = $('#checkbox8sW').prop('checked');
    var checkbox8sGChecked = $('#checkbox8sG').prop('checked');
    var checkbox8sJChecked = $('#checkbox8sJ').prop('checked');
    var checkbox8sRdChecked = $('#checkbox8sRd').prop('checked');
    var checkbox8sGltChecked = $('#checkbox8sGlt').prop('checked');

    var checkbox9sAChecked = $('#checkbox9sA').prop('checked');
    var checkbox9sWChecked = $('#checkbox9sW').prop('checked');
    var checkbox9sGChecked = $('#checkbox9sG').prop('checked');
    var checkbox9sJChecked = $('#checkbox9sJ').prop('checked');
    var checkbox9sRdChecked = $('#checkbox9sRd').prop('checked');
    var checkbox9sGltChecked = $('#checkbox9sGlt').prop('checked');


    // Tính toán logic dệ
    var hpDe = 0;
    var hpwDe = hpgDe + cswanDe;
    hpDe = (hpwDe
        * (100 + ptaoDe)) / 100
        * (100 + ptwanDe) / 100
        * (100 + ptgangDe) / 100
        * (100 + ptjayDe) / 100
        * (100 + ptradaDe) / 100
        * (100 + ptctrDe) / 100;

    // Tính toán logic sư 
    var hp = 0;
    var hpw = hpg + cswan;
    var hpsu = 0;
    var hpde = 0;
    var tam = 0;

    hp = (hpw
        * (100 + ptao)) / 100
        * (100 + ptwan) / 100
        * (100 + ptgang) / 100
        * (100 + ptjay) / 100
        * (100 + ptrada) / 100
        * (100 + ptglt) / 100
        * (100 + ptsach) / 100

        * (100 + ptctr) / 100
        * (100 + ptvpdl) / 100
        * (100 + ptvan) / 100
        * (100 + ptpet) / 100
        * (100 + ptbtc2) / 100
        * (100 + ptdh) / 100

    hpsu = hp;
    hpde = hpDe;
    tam = hp;

    // Tính toán giá trị dựa trên trạng thái của checkbox 8s
    if (checkbox8sAChecked) {
        hpsu = hpsu * (100 + 5) / 100
    }

    if (checkbox8sWChecked) {
        hpsu = hpsu * (100 + 5) / 100
    }

    if (checkbox8sGChecked) {
        hpsu = hpsu * (100 + 5) / 100
    }

    if (checkbox8sJChecked) {
        hpsu = hpsu * (100 + 5) / 100
    }

    if (checkbox8sRdChecked) {
        hpsu = hpsu * (100 + 5) / 100
    }

    if (checkbox8sGltChecked) {
        hpsu = hpsu * (100 + 5) / 100
    }

    // Tính toán giá trị dựa trên trạng thái của checkbox 9s
    if (checkbox9sAChecked) {
        hpsu = hpsu * (100 + 5) / 100
            * (100 + 5) / 100
    }

    if (checkbox9sWChecked) {
        hpsu = hpsu * (100 + 5) / 100
            * (100 + 5) / 100
    }

    if (checkbox9sGChecked) {
        hpsu = hpsu * (100 + 5) / 100
            * (100 + 5) / 100
    }

    if (checkbox9sJChecked) {
        hpsu = hpsu * (100 + 5) / 100
            * (100 + 5) / 100
    }

    if (checkbox9sRdChecked) {
        hpsu = hpsu * (100 + 5) / 100
            * (100 + 5) / 100
    }

    if (checkbox9sGltChecked) {
        hpsu = hpsu * (100 + 5) / 100
            * (100 + 5) / 100
    }

    // Tính toán giá trị dựa trên trạng thái của checkbox
    if (checkbox1Checked) {     //Bh1
        hpsu = hpsu * 2;
        hpde = hpde * 2;;
    }

    if (checkbox2Checked) {     //Bh2
        hpsu = hpsu * 11 / 5;
        hpde = hpde * 11 / 5;
    }

    if (checkbox3Checked) {     //Tôm
        hpsu = hpsu * 21 / 20;
        hpde = hpde * 21 / 20;
    }

    if (checkbox4Checked) {     //Khỉ
        hpsu = hpsu * 2;
    }

    if (checkbox5Checked) {     //Sáo
        hpsu = hpsu * 2;
        hpde = hpde * 2;
    }

    if (checkbox6Checked) {     //Xhp
        hpsu = hpsu * 7;
    }

    if (checkbox7Checked) {     //Nrsđ 2s
        hpsu = hpsu * 6 / 5;
    }

    if (checkbox8Checked) {     //Nappa sư
        hpsu = hpsu * 18 / 10;
    }

    if (checkbox9Checked) {     //Nappa đệ
        hpde = hpde * 18 / 10;
        hpDe = hpDe * 18 / 10;
    }

    if (checkbox10Checked) {     //Rồng namec
        hpsu = hpsu * 101 / 100;
    }
    var roundedHpSu = Math.round(hpsu + hpde);

    var roundedHpDe = Math.round(hpDe);


    // Hiển thị kết quả lên div
    $('#tongHp').text(formatNumber(roundedHpSu));
    $('#tongHpDe').text(formatNumber(roundedHpDe));
}