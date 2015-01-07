define( [], function () {
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: {
				uses: "dimensions",
				min: 1,
				max: 1
			},
			measures: {
				uses: "measures",
				min: 1,
				max: 1
			},
			sorting: {
				uses: "sorting"
			},
			settings: {
				uses: "settings",
				items: {
					fonts: {
						type: "items",
						label: "Chart Types",
						items: {
							chartType: {
								type:"string",
								component: "dropdown",
								label: "Chart Type",
								ref: "chart",
								options: [ {
									value: "line",
									label: "Line"
								}, {
									value: "bar",
									label: "Bar"
								}, {
									value: "radar",
									label: "Radar"
								}/*, {
									value: "polar",
									label: "PolarArea"
								}, {
									value: "pie",
									label: "Pie"
								}, {
									value: "doughnut",
									label: "Doughnut"
								}*/],
								defaultValue: "line"
							}
						}
					}
				}
			}
		}
	};
} );