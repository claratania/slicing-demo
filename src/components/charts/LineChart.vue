<script>
import { Line } from 'vue-chartjs'

// var ctx = document.getElementById('line-chart').getContext('2d');
// var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
// gradientFill.addColorStop(0, "rgba(65, 195, 255, 1)");
// gradientFill.addColorStop(1, "rgba(65, 195, 255, 0.1)");

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          backgroundColor: 'rgba(65, 195, 255, 1)',
          data: [750000, 800000, 880000, 900000]
        }
      ]
    },
    {
      legend: { display: false }
    })
  }
}
</script>