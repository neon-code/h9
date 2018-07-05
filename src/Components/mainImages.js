import React from 'react';
import '../CSS/primary.css';
import { Button, Image, Icon, Label, Header, Modal } from 'semantic-ui-react';

var fileDir = {
    1:[
        { fileName: './images/n01491361_68.JPEG', id: "n01491361" },
        { fileName: './images/n01616318_6.JPEG', id: "n01616318" },
        { fileName: './images/n01632458_31.JPEG', id: "n01632458" },
        { fileName: './images/n01644900_80.JPEG', id: "n01644900" },
        { fileName: './images/n01697457_93.JPEG', id: "n01697457" },
        { fileName: './images/n01817953_150.JPEG', id: "n01817953" },
        { fileName: './images/n01950731_161.JPEG', id: "n01950731" },
        { fileName: './images/n01984695_107.JPEG', id: "n01984695" },
        { fileName: './images/n02012849_169.JPEG', id: "n02012849" },
        { fileName: './images/n02086079_140.JPEG', id: "n02086079" },
        { fileName: './images/n02087394_46.JPEG', id: "n02087394" },
        { fileName: './images/n02090379_13.JPEG', id: "n02090379" },
        { fileName: './images/n02095570_5.JPEG', id: "n02095570" },
        { fileName: './images/n02106662_104.JPEG', id: "n02106662" },
        { fileName: './images/n02107574_43.JPEG', id: "n02107574" },
        { fileName: './images/n02110063_49.JPEG', id: "n02110063" },
        { fileName: './images/n02110958_131.JPEG', id: "n02110958" },
        { fileName: './images/n02111277_115.JPEG', id: "n02111277" },
        { fileName: './images/n02120505_173.JPEG', id: "n02120505" },
        { fileName: './images/n02123045_34.JPEG', id: "n02123045" },
        { fileName: './images/n02123159_31.JPEG', id: "n02123159" },
        { fileName: './images/n02127052_206.JPEG', id: "n02127052" },
        { fileName: './images/n02129604_145.JPEG', id: "n02129604" },
        { fileName: './images/n02134084_6.JPEG', id: "n02134084" },
        { fileName: './images/n02167151_87.JPEG', id: "n02167151" },
        { fileName: './images/n02174001_12.JPEG', id: "n02174001" },
        { fileName: './images/n02206856_52.JPEG', id: "n02206856" },
        { fileName: './images/n02259212_21.JPEG', id: "n02259212" },
        { fileName: './images/n02279972_144.JPEG', id: "n02279972" },
        { fileName: './images/n02328150_97.JPEG', id: "n02328150" },
        { fileName: './images/n02486410_34.JPEG', id: "n02486410" },
        { fileName: './images/n02667093_88.JPEG', id: "n02667093" },
        { fileName: './images/n02690373_306.JPEG', id: "n02690373" },
        { fileName: './images/n02782093_23.JPEG', id: "n02782093" },
        { fileName: './images/n02788148_293.JPEG', id: "n02788148" },
        { fileName: './images/n02802426_131.JPEG', id: "n02802426" },
        { fileName: './images/n02817516_407.JPEG', id: "n02817516" },
        { fileName: './images/n02992529_38.JPEG', id: "n02992529" },
        { fileName: './images/n03100240_62.JPEG', id: "n03100240" },
        { fileName: './images/n03160309_959.JPEG', id: "n03160309" },
        { fileName: './images/n03787032_4.JPEG', id: "n03787032" },
        { fileName: './images/n03838899_3.JPEG', id: "n03838899" },
        { fileName: './images/n03877472_79.JPEG', id: "n03877472" },
        { fileName: './images/n03916031_64.JPEG', id: "n03916031" },
        { fileName: './images/n04485082_315.JPEG', id: "n04485082" },
        { fileName: './images/n07697313_12.JPEG', id: "n07697313" },
        { fileName: './images/n07742313_94.JPEG', id: "n07742313" },
        { fileName: './images/n07860988_402.JPEG', id: "n07860988" },
        { fileName: './images/n09288635_48.JPEG', id: "n09288635" },
        { fileName: './images/n09332890_203.JPEG', id: "n09332890" },
    ],

    2:[
        { fileName: './images/n01443537_16.JPEG', id: "0" },
        { fileName: './images/n01484850_76.JPEG', id: "0" },
        { fileName: './images/n01514668_202.JPEG', id: "1" },
        { fileName: './images/n01518878_5.JPEG', id: "1" },
        { fileName: './images/n01531178_371.JPEG', id: "1" },
        { fileName: './images/n01537544_32.JPEG', id: "1" },
        { fileName: './images/n01558993_21.JPEG', id: "1" },
        { fileName: './images/n01614925_126.JPEG', id: "1" },
        { fileName: './images/n01630670_26.JPEG', id: "8" },
        { fileName: './images/n01631663_72.JPEG', id: "8" },
        { fileName: './images/n01632458_19.JPEG', id: "8" },
        { fileName: './images/n01644900_80.JPEG', id: "8" },
        { fileName: './images/n01667114_43.JPEG', id: "8" },
        { fileName: './images/n01697457_93.JPEG', id: "8" },
        { fileName: './images/n01739381_160.JPEG', id: "8" },
        { fileName: './images/n01755581_209.JPEG', id: "8" },
        { fileName: './images/n01795545_50.JPEG', id: "1" },
        { fileName: './images/n01877812_69.JPEG', id: "7" },
        { fileName: './images/n01944390_9.JPEG', id: "5" },
        { fileName: './images/n01990800_96.JPEG', id: "5" },
        { fileName: './images/n02012849_26.JPEG', id: "1" },
        { fileName: './images/n02058221_193.JPEG', id: "1" },
        { fileName: './images/n02074367_2.JPEG', id: "0" },
        { fileName: './images/n02085620_41.JPEG', id: "3" },
        { fileName: './images/n02086910_26.JPEG', id: "3" },
        { fileName: './images/n02087394_52.JPEG', id: "3" },
        { fileName: './images/n02088238_22.JPEG', id: "3" },
        { fileName: './images/n02089867_91.JPEG', id: "3" },
        { fileName: './images/n02090622_16.JPEG', id: "3" },
        { fileName: './images/n02092339_31.JPEG', id: "3" },
        { fileName: './images/n02093859_3.JPEG', id: "3" },
        { fileName: './images/n02094114_27.JPEG', id: "3" },
        { fileName: './images/n02094258_40.JPEG', id: "3" },
        { fileName: './images/n02094433_63.JPEG', id: "3" },
        { fileName: './images/n02096294_67.JPEG', id: "3" },
        { fileName: './images/n02105162_45.JPEG', id: "3" },
        { fileName: './images/n02106550_47.JPEG', id: "3" },
        { fileName: './images/n02109047_26.JPEG', id: "3" },
        { fileName: './images/n02119789_122.JPEG', id: "2" },
        { fileName: './images/n02123045_93.JPEG', id: "7" },
        { fileName: './images/n02125311_475.JPEG', id: "2" },
        { fileName: './images/n02137549_19.JPEG', id: "7" },
        { fileName: './images/n02167151_84.JPEG', id: "5" },
        { fileName: './images/n02168699_124.JPEG', id: "5" },
        { fileName: './images/n02169497_214.JPEG', id: "5" },
        { fileName: './images/n02229544_36.JPEG', id: "5" },
        { fileName: './images/n02276258_8.JPEG', id: "5" },
        { fileName: './images/n02342885_34.JPEG', id: "7" },
        { fileName: './images/n02363005_213.JPEG', id: "7" },
        { fileName: './images/n02389026_1.JPEG', id: "4" },
    ],

    3:[
        { fileName: './images/n02692877_313.JPEG', id: "n02692877" },
        { fileName: './images/n02701002_107.JPEG', id: "n02701002" },
        { fileName: './images/n02704792_559.JPEG', id: "n02704792" },
        { fileName: './images/n02782093_173.JPEG', id: "n02782093" },
        { fileName: './images/n02814533_614.JPEG', id: "n02814533" },
        { fileName: './images/n03126707_321.JPEG', id: "n03126707" },
        { fileName: './images/n03344393_384.JPEG', id: "n03344393" },
        { fileName: './images/n03345487_360.JPEG', id: "n03345487" },
        { fileName: './images/n03384352_234.JPEG', id: "n03384352" },
        { fileName: './images/n03417042_108.JPEG', id: "n03417042" },
        { fileName: './images/n03444034_109.JPEG', id: "n03444034" },
        { fileName: './images/n03445924_293.JPEG', id: "n03445924" },
        { fileName: './images/n03447447_42.JPEG', id: "n03447447" },
        { fileName: './images/n03478589_147.JPEG', id: "n03478589" },
        { fileName: './images/n03496892_364.JPEG', id: "n03496892" },
        { fileName: './images/n03594945_211.JPEG', id: "n03594945" },
        { fileName: './images/n03649909_64.JPEG', id: "n03649909" },
        { fileName: './images/n03662601_373.JPEG', id: "n03662601" },
        { fileName: './images/n03670208_124.JPEG', id: "n03670208" },
        { fileName: './images/n03673027_359.JPEG', id: "n03673027" },
        { fileName: './images/n03769881_12.JPEG', id: "n03769881" },
        { fileName: './images/n03770679_83.JPEG', id: "n03770679" },
        { fileName: './images/n03776460_191.JPEG', id: "n03776460" },
        { fileName: './images/n03777568_271.JPEG', id: "n03777568" },
        { fileName: './images/n03785016_626.JPEG', id: "n03785016" },
        { fileName: './images/n03791053_694.JPEG', id: "n03791053" },
        { fileName: './images/n03792782_104.JPEG', id: "n03792782" },
        { fileName: './images/n03796401_295.JPEG', id: "n03796401" },
        { fileName: './images/n03868242_616.JPEG', id: "n03868242" },
        { fileName: './images/n03873416_766.JPEG', id: "n03873416" },
        { fileName: './images/n03895866_873.JPEG', id: "n03895866" },
        { fileName: './images/n03930630_103.JPEG', id: "n03930630" },
        { fileName: './images/n03930630_140.JPEG', id: "n03930630" },
        { fileName: './images/n03947888_445.JPEG', id: "n03947888" },
        { fileName: './images/n03977966_691.JPEG', id: "n03977966" },
        { fileName: './images/n04037443_252.JPEG', id: "n04037443" },
        { fileName: './images/n04146614_363.JPEG', id: "n04146614" },
        { fileName: './images/n04147183_395.JPEG', id: "n04147183" },
        { fileName: './images/n04252077_182.JPEG', id: "n04252077" },
        { fileName: './images/n04252225_15.JPEG', id: "n04252225" },
        { fileName: './images/n04266014_6.JPEG', id: "n04266014" },
        { fileName: './images/n04273569_242.JPEG', id: "n04273569" },
        { fileName: './images/n04285008_296.JPEG', id: "n04285008" },
        { fileName: './images/n04335435_451.JPEG', id: "n04335435" },
        { fileName: './images/n04347754_1531.JPEG', id: "n04347754" },
        { fileName: './images/n04428191_752.JPEG', id: "n04428191" },
        { fileName: './images/n04461696_260.JPEG', id: "n04461696" },
        { fileName: './images/n04465501_75.JPEG', id: "n04465501" },
        { fileName: './images/n04467665_197.JPEG', id: "n04467665" },
        { fileName: './images/n04482393_142.JPEG', id: "n04482393" },
    ]
}

var activeIndex = Math.floor(Math.random() * 50), usedImages = [activeIndex], taskDone = 1, flag;
var timeTaken = { minutes: 0, seconds: 0, milsec: 0 }, indvTime = [0, 0, 0], addTime = [0, 0, 0], avgTime = [], Interval;
var level = 1, fileName = fileDir[level][activeIndex].fileName, levelFlag = [ true, true ];
const LevelLimit = [5, 10, 15];

export class MainImages extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isopen: false,
            activeNext: false,
            buttonText: "Next Image"
        };
    }

    componentDidMount() {
        //The componentDidMount() is a React method which is triggered when the app starts.
        alert("* Please disable AdBlock and any other antivirus software before you begin!\n Make sure to \"Allow\" popups/cookies on this app! *");

        this.props.onRef(this);
        this.props.setCards(level);
    }

    updateButton() {
        //A simple condition statement to enable/disable the NEXT button
        this.state.activeNext ? this.setState({ activeNext: false }) : this.setState({ activeNext: true })
    }

    OnFinish(x) {
        if ( x === 1 ) {
            //To find the Average total time
            let td = taskDone - 1;
            avgTime[0] = addTime[0] / td;
            avgTime[1] = addTime[1] / td;
            avgTime[2] = addTime[2] / td;

            avgTime[1] += (avgTime[0] * 60) % 60;
            avgTime[2] += (avgTime[1] * 100) % 100;

            avgTime[0] = Math.floor(avgTime[0]);
            avgTime[1] = Math.floor(avgTime[1]);
            avgTime[2] = Math.floor(avgTime[2]);

            //this onFinish is in App.js as an html prop in <MainImages>
            this.props.onFinish(addTime, avgTime);
        }
        else {
            //To find the Average indv time
            let td = LevelLimit[0] ;
            avgTime[0] = indvTime[0] / td;
            avgTime[1] = indvTime[1] / td;
            avgTime[2] = indvTime[2] / td;

            avgTime[1] += (avgTime[0] * 60) % 60;
            avgTime[2] += (avgTime[1] * 100) % 100;

            avgTime[0] = Math.floor(avgTime[0]);
            avgTime[1] = Math.floor(avgTime[1]);
            avgTime[2] = Math.floor(avgTime[2]);

            this.props.apndtime(indvTime, avgTime);
        }
    }

    startTimer() {
        timeTaken.milsec++;

        if (timeTaken.milsec > 99) {
            timeTaken.seconds++;
            timeTaken.milsec = 0;
        }

        if (timeTaken.seconds > 59) {
            timeTaken.minutes++;
            timeTaken.seconds = 0;
        }
    }

    startWatch() {
        Interval = setInterval(this.startTimer, 10);
    }

    changeImage() {
        //Pause the StopWatch
        clearInterval(Interval);
        this.updateButton();

        //To pass values to Parent (App.js);
        let t = timeTaken.minutes + ":" + timeTaken.seconds + ":" + timeTaken.milsec;

        if( level === 2 || level === 3 ) 
            this.props.onNextImage(fileDir[level][activeIndex].fileName, fileDir[level][activeIndex].id, t);
        else 
            this.props.onNextImage(fileDir[level][activeIndex].fileName, parseInt(fileDir[level][activeIndex].id.slice(1), 10), t);
        
        //Add the time to find total time take
        addTime[2] += timeTaken.milsec;
        if (addTime[2] > 99) {
            addTime[1] += Math.floor(addTime[2] / 100);
            addTime[2] %= 100;
        }
        addTime[1] += timeTaken.seconds;
        if (addTime[1] > 59) {
            addTime[0] += Math.floor(addTime[1] / 60);
            addTime[1] %= 60;
        }
        addTime[0] += timeTaken.minutes;

        //For individual Level time
        indvTime[2] += timeTaken.milsec;
        if (indvTime[2] > 99) {
            indvTime[1] += Math.floor(indvTime[2] / 100);
            indvTime[2] %= 100;
        }
        indvTime[1] += timeTaken.seconds;
        if (indvTime[1] > 59) {
            indvTime[0] += Math.floor(indvTime[1] / 60);
            indvTime[1] %= 60;
        }
        indvTime[0] += timeTaken.minutes;
        
        //Clear the StopWatch
        timeTaken.milsec = timeTaken.seconds = timeTaken.minutes = 0;

        //Load next image
        taskDone++;
        //Change of Level happens here
        if (taskDone > LevelLimit[0] && taskDone < LevelLimit[1] && levelFlag[0] === true) {

            //to indicate a Level has finished labeling
            this.OnFinish(0);

            //sets the heirarchy level
            level = 2;

            //To flush out the indices and store new values
            usedImages = usedImages.slice(0, 0);

            //Reset indv Timer
            indvTime[0] = indvTime[1] = indvTime[2] = 0;

            //to prevent re-entering this if statement
            levelFlag[0] = false;
        }
        else
        if (taskDone > LevelLimit[1] && taskDone < LevelLimit[2] && levelFlag[1] === true) {
            this.OnFinish(0);
            level =3;
            usedImages = usedImages.slice(0, 0);
            indvTime[0] = indvTime[1] = indvTime[2] = 0;
            levelFlag[1] = false;
        }
        else
        if( taskDone === LevelLimit[2] )
            this.setState({ buttonText: "Finish!" })
        
        if (taskDone > LevelLimit[2] ) {
            this.OnFinish(0);
            indvTime[0] = indvTime[1] = indvTime[2] = 0;

            //indicated that the task has finished
            this.setState({
                isopen: true
            })
        }
        else {
            //Here we check if a randomly selected image has been selected before or not
            do {
                flag = true;
                activeIndex = Math.floor(Math.random() * 50);

                //We store the array index of FileDir in an array and use it compare
                for (var i = 0; i < usedImages.length; i++)
                    if (usedImages[i] === activeIndex)
                        flag = false;

                //only if a new, unique value is selected, it will display
                if (flag === true) {
                    usedImages.push(activeIndex);
                    fileName= fileDir[level][activeIndex].fileName;
                }
            } while (flag !== true);
        }

        this.props.setCards(level);

        //Start the Watch
        this.startWatch();
    }

    render() {
        return (
            <div>
                <Image className="imageStyling" src={fileName} />

                <Label style={{ zIndex: "1", position: "fixed", top: "10px", right: '4vw' }} color="teal">
                    {taskDone}/150
                </Label>

                <div className="NextButton" style={{ width: '180px' }} >
                    {this.state.activeNext ?
                        <Button primary animated size='huge' onClick={this.changeImage.bind(this)}>
                            <Button.Content visible> {this.state.buttonText} </Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
                        :
                        <Button disabled size='huge'>{this.state.buttonText}</Button>
                    }
                </div>

                <Modal open={this.state.isopen} basic dimmer="blurring" style={{ position: "fixed", width: "auto", marginTop: "30vh", marginLeft: "38vw" }}>
                    <Header icon='check square outline' style={{ textAlign: "center" }} content='Task Completed!' />
                    <Modal.Content>
                        <h2> Thank you for your participation! <br />
                            Please download the result. </h2>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='blue' inverted onClick={this.OnFinish.bind(this, 1)}>
                            <Icon name='download icon' /> Download Result
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}