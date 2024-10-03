const ctx = document.getElementById('pnlChart').getContext('2d');

const data = {
    labels: ['10-01', '10-21', '11-10', '11-30', '12-20', '01-09', '01-29', '02-18', '03-09', '03-29', '04-18', '05-08', '05-28'],
    datasets: [{
        label: 'PNL по дням',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50], // Example values, replace 50 with your actual data
        borderColor: '#00FF00',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderWidth: 2,
        pointRadius: 0, // Hide points on the line
        fill: true, // Disable filling below the line
    }]
};

const options = {
    responsive: true,
    scales: {
        x: {
            ticks: {color: '#eaecef'},
            grid: {display: false}
        },
        y: {
            ticks: {color: '#eaecef'},
            beginAtZero: true,
            grid: {color: 'rgba(255, 255, 255, 0.1)'}
        }
    },
    plugins: {
        legend: {display: false},
        tooltip: {
            backgroundColor: '#000000',
            titleColor: '#FFFFFF',
            bodyColor: '#FFFFFF',
            callbacks: {
                label: function (context) {
                    return `PNL по дням: ${context.raw} USD`;
                }
            }
        }
    }
};

new Chart(ctx, {
    type: 'bar',  // Bar chart for vertical line representation
    data: data,
    options: options
});

function toggleContent(contentId) {
  const chartContent = document.getElementById('chart-content');
  const calendarContent = document.getElementById('calendar-content');

  if (contentId === 'chart') {
    chartContent.classList.add('active');
    calendarContent.classList.remove('active');
  } else {
    calendarContent.classList.add('active');
    chartContent.classList.remove('active');
  }
}

toggleContent('chart');