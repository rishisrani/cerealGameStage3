var milk, gameOver, background, bee, score, cerealGroup, beeGroup, backgroundExtra
var cereal1 ,cereal2,cereal3,cereal4,cereal5,cereal6,cereal7

var counter = 0

var milkImage,gameOverImage, backgroundImage, beeImage, scoreImage
var cereal1Image,cereal2Image,cereal3Image,cereal4Image,cereal5Image,cereal6Image,cereal7Image

function preload(){
	cereal1Image = loadImage("images/applejackscroppedcover.png")
	cereal2Image = loadImage("images/cheerioscroppedcover.png")
	cereal3Image = loadImage("images/cocoapuffscropcover.png")
	cereal4Image = loadImage("images/frostedflakescropcover.png")
	cereal5Image = loadImage("images/fruitloopscropcover.png")
	cereal6Image = loadImage("images/luckycharmscropcover.png")
	cereal7Image = loadImage("images/miniwheatscroppedcover.png")

	scoreImage = loadImage("images/cerealbowlforcerealgame.png")

	beeImage = loadImage("images/beeforcerealgame.png")

	backgroundImage = loadImage("images/diningtablebackgroundforcerealgame.jpg")
	milkImage = loadImage("images/milkcartonforcerealgame.png")
	gameOverImage = loadImage("images/gameoverpictureforcerealgame.png")
}

function setup(){

	createCanvas(1200,500)

	backGround = createSprite(50,50,600,300)
	backGround.addImage("background",backgroundImage)
	backGround.scale=(5);
	backGround.velocityX=-1

	milk = createSprite(85,250,50,50)
	milk.addImage("milkPicture",milkImage)
	milk.scale=(0.6)
	milk.debug=true
	milk.setCollider("rectangle",0,0,155,340)

	cerealGroup = new Group()

	beeGroup = new Group()
	score = createSprite(1030,50,50,50)
	score.addImage("scorePicture",scoreImage)
	score.scale=(0.2)
	
	backgroundExtra = createSprite(0,0,120000,50000)
	backgroundExtra.shapeColor = "white"
	backgroundExtra.visible=false

	gameOver = createSprite(600,250,100,100)
	gameOver.addImage("gameOverImage",gameOverImage)
	gameOver.visible=false
	
	


}

function draw(){
	background(0)

	if(cerealGroup.isTouching(milk)){
		counter+=1
		cerealGroup.destroyEach()
	}


	if(backGround.x<0){
		backGround.x=50
	}

	milk.y=World.mouseY

	spawnBee()
	
	spawnCereal()

	drawSprites()
	
	textSize(70)
	text(counter,1110,80)
	
	
	if(beeGroup.isTouching(milk)){
		backgroundExtra.visible=true
		gameOver.visible = true
		background.velocityX = 0
		beeGroup.setVelocityXEach(0)
		cerealGroup.setVelocityXEach(0)
		cerealGroup.destroyEach()
		beeGroup.destroyEach()
		milk.destroy()
		counter=0
		score.visible=false
		counter.visible=false
	}
}

function spawnBee(){
	if(frameCount%300===0){
	var bee = createSprite(950,250,50,50)
	bee.addImage(beeImage)
	bee.velocityX=-5
	bee.scale=(0.19)
	bee.y=Math.round(random(200,400))
	beeGroup.add(bee)
	}

	

}

function spawnCereal(){
	if(frameCount%200===0){
		var cereal = createSprite(900,250,50,50)
		
		cereal.velocityX = -4
		
		cereal.y=Math.round(random(200,400))

		var rand = Math.round(random(1,7))
		switch(rand){
			case 1: cereal.addImage(cereal1Image)
			cereal.scale=(0.27)
			break
			
			case 2: cereal.addImage(cereal2Image)
			cereal.scale=(0.145)
			break
			
			case 3: cereal.addImage(cereal3Image)
			cereal.scale=(0.3)
			break
			
			case 4: cereal.addImage(cereal4Image)
			cereal.scale=(0.3)
			break
			
			case 5: cereal.addImage(cereal5Image)
			cereal.scale=(0.115)
			break
			
			case 6: cereal.addImage(cereal6Image)
			cereal.scale=(0.2)
			break
			
			case 7: cereal.addImage(cereal7Image)
			cereal.scale=(0.3)
			break
		}
		cerealGroup.add(cereal)
	}
}