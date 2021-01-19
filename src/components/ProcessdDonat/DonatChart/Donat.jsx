import { Doughnut } from 'react-chartjs-2'

function Donat() {

    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        const gradient1 = ctx.createLinearGradient(0, 0, 0, 250);
        
        
        gradient.addColorStop(0, 'rgba(5, 0, 255, 1)')
        gradient.addColorStop(1, 'rgba(101, 96, 255, 1)')
        gradient.addColorStop(0, 'rgba(89, 82, 255, 1)')
        gradient.addColorStop(1, 'rgba(7, 0, 132, 1)')
        
        gradient1.addColorStop(0, 'rgba(101, 0, 122, 1)')
        gradient1.addColorStop(1, 'rgba(134, 0, 161, 1)')
        gradient1.addColorStop(1, 'rgba(212, 0, 255, 1)')
        
        
        

        

        return {
            labels: ['Тутилган рўзалар миқдори', 'Тутилмаган рўзалар миқдори'],
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
                    data: [39, 19],
                }
            ]
        }
    }
    const options = {
        legend: {
            position: 'bottom'
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