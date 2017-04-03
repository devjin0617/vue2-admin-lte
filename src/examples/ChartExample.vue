<template>
  <section class='content'>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>Web Traffic Overview</strong>
            </p>
            <va-chart
              :chart-config='chartConfig'></va-chart>
          </div>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>Test Line Chart</strong>
            </p>
            <va-chart
              :chart-config='lineChartConfig'
            >
            </va-chart>
          </div>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>Test Bar Chart</strong>
            </p>
            <va-chart
              :chart-config='barChartConfig'
            >
            </va-chart>
          </div>
        </div>
      </div>
    </div>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>Test Radar Chart</strong>
            </p>
            <va-chart
              :chart-config='radarChartConfig'
            >
            </va-chart>
          </div>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>Test Polar Area Chart</strong>
            </p>
            <va-chart
              :chart-config='polarAreaChartConfig'
            >
            </va-chart>
          </div>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>Test Doughnut Chart</strong>
            </p>
            <va-chart
              :chart-config='doughnutChartConfig'
            >
            </va-chart>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box-body">
          <row>
            <div class='col-md-4'>
              <p class='text-center'>
                <strong>Test Bubble Chart</strong>
              </p>
              <va-chart
                :chart-config='bubbleChartConfig'
              >
              </va-chart>
            </div>
          </row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VAChart from '../components/VAChart'

export default {
  components: {
    'va-chart': VAChart
  },
  data () {
    return {
      chartConfig: {
        type: 'pie',
        data: {
          labels: ['HTML', 'JavaScript', 'CSS'],
          datasets: [{
            data: [56.6, 37.7, 4.1],
            backgroundColor: ['#00a65a', '#f39c12', '#00c0ef'],
            hoverBackgroundColor: ['#00a65a', '#f39c12', '#00c0ef']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          }
        }
      },
      lineChartConfig: {
        type: 'line',
        data: {
          datasets: [{
            label: 'Scatter Dataset',
            data: [{
              x: -10,
              y: 0
            }, {
              x: 0,
              y: 10
            }, {
              x: 10,
              y: 5
            }]
          }]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom'
            }]
          }
        }
      },
      barChartConfig: {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              data: [65, 59, 80, 81, 56, 55, 40]
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              stacked: true
            }]
          }
        }
      },
      radarChartConfig: {
        type: 'radar',
        data: {
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
              label: 'My Second dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
            }
          ]
        },
        options: {
          scale: {
            reverse: true,
            ticks: {
              beginAtZero: true
            }
          }
        }
      },
      polarAreaChartConfig: {
        type: 'polarArea',
        data: {
          datasets: [{
            data: [
              11,
              16,
              7,
              3,
              14
            ],
            backgroundColor: [
              '#FF6384',
              '#4BC0C0',
              '#FFCE56',
              '#E7E9ED',
              '#36A2EB'
            ],
            label: 'My dataset' // for legend
          }],
          labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
          ]
        },
        options: {
          elements: {
            arc: {
              borderColor: '#000000'
            }
          }
        }
      },
      doughnutChartConfig: {
        type: 'doughnut',
        data: {
          labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
              ]
            }]
        },
        options: {
          animation: {
            animateScale: true
          }
        }
      },
      bubbleChartConfig: {
        type: 'bubble',
        data: {
          datasets: [{
            label: 'First Dataset',
            data: [
              {
                x: 20,
                y: 30,
                r: 15
              },
              {
                x: 40,
                y: 10,
                r: 10
              }
            ],
            backgroundColor: '#FF6384',
            hoverBackgroundColor: '#FF6384'
          }]
        },
        options: {
          elements: {
            points: {
              borderWidth: 1,
              borderColor: 'rgb(0, 0, 0)'
            }
          }
        }
      }
    }
  }
}
</script>

<style lang='css'>
</style>
