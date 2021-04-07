<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    data () {
      return {
        chartData: {
          labels: ["30 Jan", "31 Jan", "1 Feb", "2 Feb", "3 Feb", "4 Feb", "5 Feb"],
          datasets: [
            {
              data: [800000, 830000, 845000, 850000, 870000, 860000, 855000],
              // backgroundColor: linear-gradient(rgba(0,0,0, 0.05), transparent),
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
                drawOnChartArea: false
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false,
                drawOnChartArea: false
              }
            }]
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>