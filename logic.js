function formatNumber(number) {
    // Định dạng số với dấu cách giữa các nhóm 3 chữ số
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function tinhtoan() {
    // Hàm phụ để lấy giá trị từ ô input
    function getInputValue(id) {
        return parseFloat($(id).val()) || 0;
    }

    // Hàm phụ để kiểm tra checkbox có được chọn hay không
    function isChecked(id) {
        return $(id).prop('checked');
    }

    // Lấy giá trị từ các ô input sư
    var hpg = getInputValue('#hpg');
    var cswan = getInputValue('#cswan');
    var ptctr = getInputValue('#ptctr');
    var ptvpdl = getInputValue('#ptvpdl');
    var ptvan = getInputValue('#ptvan');
    var ptpet = getInputValue('#ptpet');
    var ptbtc2 = getInputValue('#ptbtc2');
    var ptdh = getInputValue('#ptdh');

    var ptao = getInputValue('#ptao');
    var ptwan = getInputValue('#ptwan');
    var ptgang = getInputValue('#ptgang');
    var ptjay = getInputValue('#ptjay');
    var ptrada = getInputValue('#ptrada');
    var ptglt = getInputValue('#ptglt');
    var ptsach = getInputValue('#ptsach');

    // Lấy giá trị từ các ô input đệ
    var hpgDe = getInputValue('#hpgDe');
    var cswanDe = getInputValue('#cswanDe');
    var ptctrDe = getInputValue('#ptctrDe');

    var ptaoDe = getInputValue('#ptaoDe');
    var ptwanDe = getInputValue('#ptwanDe');
    var ptgangDe = getInputValue('#ptgangDe');
    var ptjayDe = getInputValue('#ptjayDe');
    var ptradaDe = getInputValue('#ptradaDe');

    // Tính toán hpDe
    var hpwDe = hpgDe + cswanDe;
    var hpDe = (hpwDe * (100 + ptaoDe) / 100 * (100 + ptwanDe) / 100 * (100 + ptgangDe) / 100
        * (100 + ptjayDe) / 100 * (100 + ptradaDe) / 100 * (100 + ptctrDe) / 100);

    // Tính toán hp
    var hpw = hpg + cswan;
    var hp = (hpw * (100 + ptao) / 100 * (100 + ptwan) / 100 * (100 + ptgang) / 100
        * (100 + ptjay) / 100 * (100 + ptrada) / 100 * (100 + ptglt) / 100 * (100 + ptsach) / 100
        * (100 + ptctr) / 100 * (100 + ptvpdl) / 100 * (100 + ptvan) / 100 * (100 + ptpet) / 100
        * (100 + ptbtc2) / 100 * (100 + ptdh) / 100);

    var hpsu = hp;
    var hpde = hpDe;

    // Áp dụng các hệ số dựa trên trạng thái của checkbox 8s
    var checkbox8sList = ['#checkbox8sA', '#checkbox8sW', '#checkbox8sG', '#checkbox8sJ', '#checkbox8sRd', '#checkbox8sGlt'];
    checkbox8sList.forEach(function (id) {
        if (isChecked(id)) {
            hpsu *= 1.05; // Mỗi checkbox 8s thêm 5%
        }
    });

    // Áp dụng các hệ số dựa trên trạng thái của checkbox 9s
    var checkbox9sList = ['#checkbox9sA', '#checkbox9sW', '#checkbox9sG', '#checkbox9sJ', '#checkbox9sRd', '#checkbox9sGlt'];
    checkbox9sList.forEach(function (id) {
        if (isChecked(id)) {
            hpsu *= 1.1025; // Mỗi checkbox 9s thêm 10.25% (5% + 5%)
        }
    });

    // Áp dụng các hệ số dựa trên trạng thái của checkbox 8s Đệ
    var checkbox8sListDe = ['#checkbox8sADe', '#checkbox8sWDe', '#checkbox8sGDe', '#checkbox8sJDe', '#checkbox8sRdDe'];
    checkbox8sListDe.forEach(function (id) {
        if (isChecked(id)) {
            hpDe *= 1.05; // Mỗi checkbox 8s thêm 5%
        }
    });

    // Áp dụng các hệ số dựa trên trạng thái của checkbox 9s Đệ
    var checkbox9sListDe = ['#checkbox9sADe', '#checkbox9sWDe', '#checkbox9sGDe', '#checkbox9sJDe', '#checkbox9sRdDe'];
    checkbox9sListDe.forEach(function (id) {
        if (isChecked(id)) {
            hpDe *= 1.1025; // Mỗi checkbox 9s thêm 10.25% (5% + 5%)
        }
    });

    // Áp dụng các hệ số dựa trên trạng thái của các checkbox khác
    if (isChecked('#checkbox1')) {
        hpsu *= 2; // Bh1
        hpde *= 2;
    }
    if (isChecked('#checkbox2')) {
        hpsu *= 2.2; // Bh2
        hpde *= 2.2;
    }
    if (isChecked('#checkbox3')) {
        hpsu *= 1.05; // Tôm
        hpde *= 1.05;
    }
    if (isChecked('#checkbox4')) {
        hpsu *= 2; // Khỉ
    }
    if (isChecked('#checkbox5')) {
        hpsu *= 2; // Sáo
        hpde *= 2;
    }
    if (isChecked('#checkbox6')) {
        hpsu *= 7; // Xhp
    }
    if (isChecked('#checkbox7')) {
        hpsu *= 1.2; // Nrsđ 2s
    }
    if (isChecked('#checkNappa')) {
        hpsu *= 1.8; // Nappa sư
    }
    if (isChecked('#checkNappaDe')) {
        hpde *= 1.8; // Nappa đệ
        hpDe *= 1.8;
    }
    if (isChecked('#checkRong')) {
        hpsu *= 1.01; // Rồng namec
    }

    // Làm tròn kết quả và hiển thị
    var roundedHpSu = Math.round(hpsu + hpde);
    var roundedHpDe = Math.round(hpDe);

    $('#tongHp').text(formatNumber(roundedHpSu));
    $('#tongHpDe').text(formatNumber(roundedHpDe));
}