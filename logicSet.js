document.addEventListener('DOMContentLoaded', function () {
    var checkbox8sA = document.getElementById('checkbox8sA');
    var checkbox9sA = document.getElementById('checkbox9sA');

    checkbox8sA.addEventListener('change', function () {
        if (this.checked) {
            checkbox9sA.checked = false;
        }
    });

    checkbox9sA.addEventListener('change', function () {
        if (this.checked) {
            checkbox8sA.checked = false;
        }
    });

    var checkbox8sW = document.getElementById('checkbox8sW');
    var checkbox9sW = document.getElementById('checkbox9sW');

    checkbox8sW.addEventListener('change', function () {
        if (this.checked) {
            checkbox9sW.checked = false;
        }
    });

    checkbox9sW.addEventListener('change', function () {
        if (this.checked) {
            checkbox8sW.checked = false;
        }
    });

    var checkbox8sG = document.getElementById('checkbox8sG');
    var checkbox9sG = document.getElementById('checkbox9sG');

    checkbox8sG.addEventListener('change', function () {
        if (this.checked) {
            checkbox9sG.checked = false;
        }
    });

    checkbox9sG.addEventListener('change', function () {
        if (this.checked) {
            checkbox8sG.checked = false;
        }
    });

    var checkbox8sJ = document.getElementById('checkbox8sJ');
    var checkbox9sJ = document.getElementById('checkbox9sJ');

    checkbox8sJ.addEventListener('change', function () {
        if (this.checked) {
            checkbox9sJ.checked = false;
        }
    });

    checkbox9sJ.addEventListener('change', function () {
        if (this.checked) {
            checkbox8sJ.checked = false;
        }
    });

    var checkbox8sRd = document.getElementById('checkbox8sRd');
    var checkbox9sRd = document.getElementById('checkbox9sRd');

    checkbox8sRd.addEventListener('change', function () {
        if (this.checked) {
            checkbox9sRd.checked = false;
        }
    });

    checkbox9sRd.addEventListener('change', function () {
        if (this.checked) {
            checkbox8sRd.checked = false;
        }
    });

    var checkbox8sGlt = document.getElementById('checkbox8sGlt');
    var checkbox9sGlt = document.getElementById('checkbox9sGlt');

    checkbox8sGlt.addEventListener('change', function () {
        if (this.checked) {
            checkbox9sGlt.checked = false;
        }
    });

    checkbox9sGlt.addEventListener('change', function () {
        if (this.checked) {
            checkbox8sGlt.checked = false;
        }
    });
});
