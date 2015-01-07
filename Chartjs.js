define( ['text!./template.html','./Chartjs.properties','./Chartjs.ng'],
function ( template, properties ) {

	return {
		template : template,
		initialProperties : {
			version : 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 2,
					qHeight : 50
				}]
			}
		},
		definition: properties,
		snapshot: {
			canTakeSnapshot: true
		},
		controller:['$scope', function($scope){
			var cats = [], series = [{data:[]}];
			var qData = $scope.$parent.layout.qHyperCube.qDataPages[0];
			if( qData && qData.qMatrix ) {
				qData.qMatrix.forEach( function (row, key) { 					
					if ( row.length > 1 ) { 						
						var dim = row[0], meas = row[1];
						if(dim.qIsOtherCell) {
							dim.qText = $scope.$parent.layout.qHyperCube.qDimensionInfo[0].othersLabel;
						}
						cats.push( dim.qText );
						series[0].data.push( meas.qNum );
					}
				});
			}
			$scope.data = {
				labels: cats,
				datasets : series
			};
			$scope.activeData = $scope.data;
		}]
	};

} );

