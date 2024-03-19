const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}

// Sorting | Ordering data of HTML table
table_headings.forEach((head, i) => {
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        // Toggle ascending/descending order based on arrow direction
        let sort_asc = !head.classList.contains('asc');
        head.classList.toggle('asc', sort_asc);

        // Update arrow direction
        head.querySelector('.icon-arrow').innerHTML = sort_asc ? '&DownArrow;' : '&UpArrow;';

        sortTable(i, sort_asc);
    }
});

// Function to sort table based on column index and direction
function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = parseInt(a.querySelectorAll('td')[column].textContent.trim()),
            second_row = parseInt(b.querySelectorAll('td')[column].textContent.trim());

        return sort_asc ? (first_row - second_row) : (second_row - first_row);
    })
        .forEach(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}
