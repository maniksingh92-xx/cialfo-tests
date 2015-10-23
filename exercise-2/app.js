var topLeft = view.center - [600,300];
var bottomRight = view.center + [600,300];

var background = new Path.Rectangle({
  topLeft: topLeft,
  bottomRight: bottomRight,
  fillColor: {
    gradient: {
      stops: ['#b0e0e6', '#c0eeec']
    },
    origin: topLeft,
    destination: bottomRight
  }
});

//Center Cloud
var largeCloud = new Raster('bigCloud');
largeCloud.position = view.center;
var largeText = new PointText(new Point(10, 0));
largeText.characterStyle = {
  fontSize:36,
  fillColor:"#ed1c24",
  font:"Arial"
};
largeText.position = largeCloud.position - [50,-15];
largeText.content = "Skeptic";

//Top left cloud
var topLeftCloud = new Raster('cloud1');
topLeftCloud.position = view.center - [400,100];
var topLefttext = new PointText(new Point(10, 0));
topLefttext.characterStyle = {
  fontSize:16,
  fillColor:"#777777",
  font:"Arial"
};
topLefttext.position = topLeftCloud.position - [40,-15];
topLefttext.content = "Cynic";

//Bottom Right Cloud
var bottomRightCloud = new Raster('cloud1');
bottomRightCloud.position = view.center + [400,100];
var bottomRightText = new PointText(new Point(10, 0));
bottomRightText.characterStyle = {
  fontSize:16,
  fillColor:"#777777",
  font:"Arial"
};
bottomRightText.position = bottomRightCloud.position - [40,-15];
bottomRightText.content = "Doubtful";

//Bottom cloud
var bottomCloud = new Raster('cloud2');
bottomCloud.position = view.center + [0,200];
var bottomText = new PointText(new Point(10, 0));
bottomText.characterStyle = {
  fontSize:16,
  fillColor:"#777777",
  font:"Arial"
};
bottomText.position = bottomCloud.position - [25,-15];
bottomText.content = "Helpful";

//Top cloud
var topCloud = new Raster('cloud1');
topCloud.position = view.center - [0,200];
var topText = new PointText(new Point(10, 0));
topText.characterStyle = {
  fontSize:16,
  fillColor:"#777777",
  font:"Arial"
};
topText.position = topCloud.position - [40,-15];
topText.content = "Dubious";

//Top right cloud
var topRightCloud = new Raster('cloud2');
topRightCloud.position = view.center + [400,-100];
var topRightText = new PointText(new Point(10, 0));
topRightText.characterStyle = {
  fontSize:16,
  fillColor:"#777777",
  font:"Arial"
};
topRightText.position = topRightCloud.position - [40,-15];
topRightText.content = "Honorable";

//Bottom Left Cloud
var bottomLeftCloud = new Raster('cloud1');
bottomLeftCloud.position = view.center + [-400,100];
var bottomLeftText = new PointText(new Point(10, 0));
bottomLeftText.characterStyle = {
  fontSize:16,
  fillColor:"#777777",
  font:"Arial"
};
bottomLeftText.position = bottomLeftCloud.position - [40,-15];
bottomLeftText.content = "Eagerness";
