import { Doughnut } from 'react-chartjs-2'

function Donat() {

    



    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        const gradient1 = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(1, '#f2f0f0')
        
        gradient1.addColorStop(0, 'rgba(101, 0, 122, 1)')
        gradient1.addColorStop(1, 'rgba(134, 0, 161, 1)')
        gradient1.addColorStop(1, 'rgba(212, 0, 255, 1)')
        
        
        

        

        return {
            labels: ['bajarilgan', 'bajarilmagan'],
            datasets: [
                {
                    label: '# of Votes',
                    backgroundColor : [
                        gradient1,
                        gradient,
                    ],
                    borderColor : "#fff",
                    borderWidth: 2,
                    pointColor : "#fff",
                    pointHighlightFill: "#fff",
                    data: [.5, .5]
                }
            ]
        }
    }
    const options = {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        cutoutPercentage: 75, // qalin yogon qilish
        legend: {
            display: false,
            position: 'bottom'
        },
        tooltips: {
            enabled: false
        }
    }

    return (
        <>
        <Doughnut
            data={data}
            height={250}
            width={450}
            options={options}
            
        />
        </>
    )
}

export default Donat