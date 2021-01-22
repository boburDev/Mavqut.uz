import React from 'react' 
import './SectionMore.css'
import close from '../Section/images/cloIcon.svg'

export default function SectionMore () {
    function arrow() {
        const more = document.getElementById('wrapper')
        document.getElementById('logo_mavqut').style.display = 'block'
      document.getElementById('navabr').classList.remove('navbar-fade')
      document.getElementById('navbar-more').classList.remove('navbar-fade')
      document.getElementById('more').classList.remove('more-fade')
      document.getElementById('navbar-footer').classList.remove('navbar-fade')
      document.getElementById('navbar-foot').classList.remove('navbar-fade')
	document.getElementById('navbar-language').classList.remove('navbar-fade')
      
      more.children[0].children[0].classList.remove('star')
      more.children[0].children[0].classList.add('back')

      more.children[2].children[0].classList.remove('moons')
      more.children[2].children[0].classList.add('back')

      more.children[3].children[0].classList.remove('ways')
      more.children[3].children[0].classList.add('back')

      more.children[4].children[0].classList.remove('mosques')
      more.children[4].children[0].classList.add('back')

      more.children[5].children[0].classList.remove('tower1')
      more.children[5].children[0].classList.add('back')

      more.children[6].children[0].classList.remove('littele-tower1')
      more.children[6].children[0].classList.add('back')
    }
    return(
        <>
        <div className="more" id="more">
                    <div onClick={arrow}><img className="close" src={close} alt="close"/></div>
                    <div className="more-body">
                        <h2>Clicked</h2>
                        <p className="more-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio doloribus unde harum est autem ducimus architecto quisquam nobis, sint ad earum sapiente quam, velit sunt similique non quod eligendi aut quis voluptates excepturi voluptatibus accusamus. Deleniti impedit doloremque, consequuntur natus obcaecati sint sapiente ipsam tenetur quas rerum, architecto laudantium magni aliquam ad molestias accusamus alias iure facilis aut et inventore dicta. Iusto cumque et pariatur asperiores mollitia deserunt consequatur, excepturi quo! Incidunt possimus ad recusandae tempora ullam blanditiis ipsam numquam quidem voluptates quasi commodi repellat corrupti modi eligendi nesciunt, culpa dicta earum, quam distinctio aliquam ut? Ad, blanditiis asperiores!
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque ipsum earum, expedita cumque repellendus ex fuga impedit dolorum beatae? Iste nulla ex magnam praesentium obcaecati quae blanditiis hic fugit quaerat ipsum, nemo dignissimos rem iusto amet odit dolorem quasi quisquam reiciendis aut et eaque tenetur dolor earum. Iusto eveniet ratione dolorem. Eaque facere tempora debitis, eos cum, magni quas veritatis, accusamus atque molestias enim voluptate dolor perferendis ullam tenetur aliquid quaerat qui reprehenderit vitae error provident? Nulla eligendi voluptatum illum! Excepturi veniam labore molestiae illo illum repudiandae exercitationem reprehenderit facere voluptatum, ipsam delectus aspernatur temporibus ut, sequi fugit quibusdam voluptates dolores corporis. Hic, delectus quod? Earum laborum vel magni sunt exercitationem eveniet quaerat, nisi labore? Ad, odit voluptatum.
                        </p>
                    </div>
                </div>
        </>
    )
}