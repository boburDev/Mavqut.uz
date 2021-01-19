import { Line } from 'react-chartjs-2'

function Donat() {

    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0,900);
        
        
        gradient.addColorStop(0.0, 'rgba(44, 5, 128, 1)')
        gradient.addColorStop(0.9, 'rgba(237, 237, 237, 0)')
        

        return {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', ''],
            datasets: [
            {
                label: 'rakatlar soni',
                data: [5, 8, 10, 9, 8, 13, 11, 9, 15, 14, 4, 0, 3, 6,],
                backgroundColor : gradient,
                borderColor: ['rgba(44, 5, 128, .5)'],
                opacity: 0.8,
                pointRadius: 5,
                pointBackgroundColor: "#FF00E5"
            }
        ]
    }
    }


    



        
    const options = {
        events: ['click'],
        scales: {
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    min: 0,
                    fontSize: 18
                },
                stacked: true,
            }],
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                },
                ticks: {
                    fontSize: 18
                },
            }]    
        },
        legend: {
            display: false
        }
    }

    return (
        <>
        <Line
            height={550}
            width={800}
            data={data}
            options={options}
        />
        </>
    )
}

export default Donat