

const data = {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],

    datasets: [{
        label: '$',
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: [
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(186, 34%, 60%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
        ],
        hoverBackgroundColor: [
            'hsl(10, 79%, 75%)',
            'hsl(10, 79%, 75%)',
            'hsl(186, 34%, 70%)',
            'hsl(10, 79%, 75%)',
            'hsl(10, 79%, 75%)',
            'hsl(10, 79%, 75%)',
            'hsl(10, 79%, 75%)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 0)',
            'rgba(54, 162, 235, 0)',
            'rgba(255, 206, 86, 0)',
            'rgba(75, 192, 192, 0)',
            'rgba(153, 102, 255, 0)',
            'rgba(255, 159, 64, 0)'
        ],
        borderWidth: 1,
        borderRadius: 5
    }]
};

const tooltipTitle = (tooltipItems) => {
    return '';
}

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                
                grid: {
                    display: false    
                },
                display: false
            },
            x: {
                grid: {
                    display: false,
                },
                display: false,
            },
        },

        
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                
                callbacks: {
                    title: tooltipTitle,
                    // label: function(tooltipItems, data) {
                    //     var label = tooltipItems.yLabel;
                    //     alert(label);
                    //     //alert(label);
                    //     return label;

                    // }
                }
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart').getContext('2d'),
    config
);