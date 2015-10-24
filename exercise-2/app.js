(function () {
  var background, centerCloud, clouds, lightning;
  var children = project.activeLayer.children;
  var lives = 3;
  var ld = 1;
  var correct = 0;
  var placedSymbol = [];

  //one rain drop
  var r1 = new Path.Rectangle({
    point: [0,0],
    size: [1,10],
    fillColor: new Color('white')
  });
  //make the rain drop into a symbol
  var symbol = new Symbol(r1);
  r1.remove();

  initializeCanvas(view.center - [600, 300], view.center + [600, 300], "Skeptic", ["Doubtful", "Dubious", "Cynic"], ["Honorable", "Helpful", "Diligent"]);

  function initializeCanvas(tl, br, mainWord, correctWords, incorrectWords) {
    "use strict";

    clouds = {};
    correctWords = shuffleArray(correctWords);
    incorrectWords = shuffleArray(incorrectWords);
    var smallCoordinates = [[400, 100],[-400, -100],[0, 200],[0, -200],[400, -100],[-400, 100]];

    background = new Path.Rectangle({
      topLeft: tl,
      bottomRight: br,
      fillColor: {
        gradient: {
          stops: ['#b0e0e6', '#c0eeec']
        },
        origin: tl,
        destination: br
      }
    });
    background.name = "background";

    lightning = new Raster('lightning');
    lightning.position = view.center + [200,-110];
    lightning.name = 'lightning1';
    lightning.opacity = 0;

    generateClouds(mainWord, correctWords, incorrectWords, smallCoordinates);

  }

  function generateClouds(mainWord, correctWords, incorrectWords, smallCoordinates) {
    "use strict";

    while(correctWords.length + incorrectWords.length != 0) {
      var rand = Math.floor(Math.random() * 2);
      var cloudType = (correctWords.length + incorrectWords.length)%2 ? "cloud1" : "cloud2";
      if(rand == 0) {

        if(correctWords.length != 0) clouds[correctWords[correctWords.length - 1]] = new SmallCloud(correctWords.pop(), smallCoordinates.pop(), cloudType, true);
        else clouds[incorrectWords[incorrectWords.length - 1]] = new SmallCloud(incorrectWords.pop(), smallCoordinates.pop(), cloudType, false);
      } else {
        if(incorrectWords.length != 0) clouds[incorrectWords[incorrectWords.length - 1]] = new SmallCloud(incorrectWords.pop(), smallCoordinates.pop(), cloudType, false);
        else clouds[correctWords[correctWords.length - 1]] = new SmallCloud(correctWords.pop(), smallCoordinates.pop(), cloudType, true);
      }
    }

    centerCloud = new CenterCloud(mainWord);
    centerCloud.name = "centerCloud";
  }

  function CenterCloud(text) {
    this.raster = new Raster('bigCloud');
    this.raster.position = view.center;
    this.text = new PointText(new Point(10, 0));
    this.text.characterStyle = {
      fontSize: 36,
      fillColor: "#ed1c24",
      font: "Arial"
    };
    this.text.position = this.raster.position - [50, -15];
    this.text.content = text;

    this.getPosition = function () {
      "use strict";
      return this.raster.position;
    }
  }

  function SmallCloud(text, pos, cloud, isCorrect) {
    "use strict";
    var self = this;
    self.tried = false;

    self.link = new Path({
      segments: [view.center + pos, [view.center.x, view.center.y]]
    });
    self.link.strokeColor = '#ffffff';
    self.link.strokeWidth = 4;
    self.link.dashArray = [20, 12];
    self.link.visible = false;
    self.link.name = text + "link";

    self.isCorrect = isCorrect;
    self.raster = new Raster(cloud);
    self.raster.position = view.center + pos;
    self.raster.name = text + "cloud";

    self.text = new PointText(new Point(10, 0));
    self.text.characterStyle = {
      fontSize: 16,
      fillColor: "#777777",
      font: "Arial"
    };
    self.text.position = self.raster.position - [25, -15];
    self.text.content = text;

    self.mark = self.isCorrect ? new Raster('checkMark') : new Raster('crossMark');
    //self.mark = new Raster('checkMark');
    self.mark.position = self.text.position - [50, 0];
    self.mark.visible = false;
    self.mark.name = text + "mark";

    self.raster.onClick = function (event) {
      children[self.mark.name].visible = true;
      if(self.tried == false) {
        self.tried = true;
        self.raster.onClick = null;
        if(self.isCorrect) {
          correct++;
          children[self.link.name].visible = true;
          children['background'].fillColor = {
            gradient: {
              stops: ['#b0e0e6', '#c0eeec']
            },
            origin: view.center - [600, 300],
            destination: view.center + [600, 300]
          };
          if(children['lightning1'].visible != undefined) {
            children['lightning1'].visible = false;
          }
          if(correct == 3) {
            var gameWon = new Path.Rectangle({
              topLeft: view.center - [600, 300],
              bottomRight: view.center + [600, 300],
              fillColor: {
                gradient: 'black',
                origin: view.center - [600, 300],
                destination: view.center + [600, 300]
              }
            });
            gameWon.opacity=0;
            var winText = new PointText(new Point(10, 0));
            winText.characterStyle = {
              fontSize: 16,
              fillColor: "#ffffff",
              font: "Arial"
            };
            winText.position = view.center + [-25, -15];
            winText.content = "Game Won!";
            winText.opacity = 0;
            view.onFrame = function () {
              gameWon.opacity += 0.03;
              winText.opacity += 0.03;
            }


          }
        } else {
          lives--;
          if(lives <= 2) {
            children['background'].fillColor = {
              gradient: {
                stops: [['#85a39f', 0.2], '#0e2f44']
              },
              origin: view.center - [600, 300],
              destination: view.center + [600, 300]
            };

            view.onFrame = function() {
              if(ld == 1) {
                if(lightning.opacity >= 1) {
                  ld *= -1;
                  while(lightning.opacity < 1) lightning.opacity -= 0.01;
                }
                else lightning.opacity += 0.01;

              } else {

                if(lightning.opacity <= 0) {
                  ld *= -1;
                  while(lightning.opacity > 0) lightning.opacity += 0.01;
                }
                else lightning.opacity -= 0.01;
              }
            };



          }

          if(lives ==  1) {
            lightning.opacity = 1;
            view.onFrame = function() {
              rain();
            }
          }

          if(lives == 0) {
            new Path.Rectangle({
              topLeft: view.center - [600, 300],
              bottomRight: view.center + [600, 300],
              fillColor: {
                gradient: 'black',
                origin: view.center - [600, 300],
                destination: view.center + [600, 300]
              }
            });

            var overText = new PointText(new Point(10, 0));
            overText.characterStyle = {
              fontSize: 16,
              fillColor: "#ffffff",
              font: "Arial"
            };
            overText.position = view.center + [-25, -15];
            overText.content = "Game Over.";
          }
        }
      }
    }
  }
  
  function rain() {
    "use strict";
    var group = new Group();

    for (var i = 0; i < 20; i++){
      placedSymbol[i] = symbol.place();
      placedSymbol[i].position = Point.random() * view.size;
      group.addChild(placedSymbol[i]);
    }
    window.setTimeout(function() {
      group.visible = false;
    }, 100);
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

})();