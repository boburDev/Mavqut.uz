import React from 'react';
import './Calendar.css';
import './CalendarMedia.css'
export default function Calendar() {
	return(
		<div className="all">
				<div className="row m-0 p-0">
					<div className="big_column col-xl-5 col-md-7">
						<div className="big_column__in big_column__in_once">
							<b>Ўқилмаган намозлар муддати</b>
							<div className="big_column__left">
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>10</h6>
									</div>
									<b>Йил</b>
								</div>
								<div className="cub cub_dots">
									<h1>:</h1>	
								</div>
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>2</h6>
									</div>
									<b>Ой</b>
								</div>
								<div className="cub cub_dots">
									<h1>:</h1>
								</div>
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>12</h6>
									</div>
									<b>Кун</b>
								</div>
							</div>
						</div>
					</div>
					<div className="big_column col-xl-7 col-12">
						<div className="big_column__in">
							<b>Қазо намозларини тезлаштириш</b>
							<div className="big_column_right_all">
								<div className="row m-0 p-0 w-100">
									<div className="big_column__right col-xl-4 col-md-12">
										<h6>1 баробар кўп</h6>
										<h6 className="active">1 баробар кўп</h6>
										<h6>1 баробар кўп</h6>
									</div>
									<div className="big_column__right col-xl-8 col-md-12">
										<div className="day">
											<div className="day__top">
												<h6>Тахминий тугатилиш муддати</h6>
											</div>
											<div className="day__bottom">
												<div className="row m-0 p-0">
													<div className="day__bottom_cub linear_left col-xl-4 col-4">
														<h1>9</h1>
														<h6>Йил</h6>
													</div>
													<div className="day__bottom_cub col-xl-4 col-4">
														<h1>5</h1>
														<h6>Ой</h6>
													</div>
													<div className="day__bottom_cub linear_right col-xl-4 col-4">
														<h1>25</h1>
														<h6>Кун</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	)
}