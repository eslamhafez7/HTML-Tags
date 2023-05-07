    const toggleBtn = document.querySelector('.toggle-sidebar');
	const sidebar = document.querySelector('.sidebar');
    const closebar = document.querySelector(".close");

	toggleBtn.addEventListener('click', () => {
		sidebar.classList.toggle('show');
	});

    closebar.addEventListener('click', () => {
        sidebar.classList.remove("show");
    })


const links = document.querySelectorAll('.item');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    links.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
    });
});

    function showInstruction(id) {
        var instructions = document.getElementsByClassName('instruction');
        for (var i = 0; i < instructions.length; i++) {
            instructions[i].style.display = 'none';
        }
        document.getElementById(id).style.display = 'block';
}
