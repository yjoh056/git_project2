<script>
        const depth1 = document.querySelector('.dept1 li');
        depth1.addEventListener('mouseover', function () {
            depth1.querySelectorAll('.dept2').forEach((o) => { o.style.display = 'block' }) /* textMenu */
        })
        // hoverOn
        depth1.addEventListener('mouseout', function () {
            depth1.querySelectorAll('.dept2').forEach((o) => { o.style.display = 'none' }) /* textMenu */
           
        })
        // hoverOff
    </script>