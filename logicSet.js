document.addEventListener('DOMContentLoaded', function () {
    // Hàm để gán sự kiện thay đổi cho cặp checkbox
    function setupCheckboxPair(checkbox8sId, checkbox9sId) {
        var checkbox8s = document.getElementById(checkbox8sId);
        var checkbox9s = document.getElementById(checkbox9sId);

        checkbox8s.addEventListener('change', function () {
            if (this.checked) {
                checkbox9s.checked = false;
            }
        });

        checkbox9s.addEventListener('change', function () {
            if (this.checked) {
                checkbox8s.checked = false;
            }
        });
    }

    // Các cặp checkbox cần gán sự kiện
    var checkboxPairs = [
        ['checkbox8sA', 'checkbox9sA'],
        ['checkbox8sW', 'checkbox9sW'],
        ['checkbox8sG', 'checkbox9sG'],
        ['checkbox8sJ', 'checkbox9sJ'],
        ['checkbox8sRd', 'checkbox9sRd'],
        ['checkbox8sGlt', 'checkbox9sGlt']
    ];

    // Gán sự kiện cho từng cặp checkbox
    checkboxPairs.forEach(function(pair) {
        setupCheckboxPair(pair[0], pair[1]);
    });
});