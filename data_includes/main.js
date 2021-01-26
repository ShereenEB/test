PennController . ResetPrefix ( null ) ;   // Initiates PennController
	

	var  showProgressBar  =  true ;
	// var progressBarText = "progress";
	

	// edit text pop up for voice recording
	let  replaceConsentMic  =  ( ) => {
	        let  consentLink  =  $ ( ".PennController-PennController a.Message-continue-link" ) ;
	        if  ( consentLink . length  >  0  &&  consentLink [ 0 ] . innerHTML . match ( / ^ By clicking this link I understand that I grant this experiment's script access to my recording device / ) )
	            consentLink . html ( "Click to give this script access to my microphone." ) ;
	        else
	            window . requestAnimationFrame (  replaceConsentMic  ) ;
	} ;
	

	window . requestAnimationFrame (  replaceConsentMic  ) ;
	

	const  replacePreloadingMessage  =  ( ) => {
	    const  preloadingMessage  =  $ ( ".PennController-PennController> div" ) ;
	    if  ( preloadingMessage . length  >  0  &&  preloadingMessage [ 0 ] . innerHTML . match ( / ^ <p> Please wait while the resources are preloading / ) )
	        preloadingMessage . html ( "<p> Loading, please wait </p>" ) ;
	    window . requestAnimationFrame (  replacePreloadingMessage  ) ;
	} ;
	window . requestAnimationFrame (  replacePreloadingMessage  ) ;
	

	const  replaceUploadingMessage  =  ( ) => {
	    const  uploadingMessage  =  $ ( ".PennController-PennController> p" ) ;
	    if  ( uploadingMessage . length  >  0  &&  uploadingMessage [ 0 ] . innerHTML . match ( / ^ Please wait while the archive of your recordings is being uploaded to the server / ) )
	        uploadingMessage . html ( "Please wait for the archive of your recordings to be uploaded to the server. This may take a few minutes." ) ;
	    window . requestAnimationFrame (  replaceUploadingMessage  ) ;
	} ;
	window . requestAnimationFrame (  replaceUploadingMessage  ) ;
	

	// DebugOff ()
	

	// Show the 'intro' trial first, then all the 'experiment' trials in a random order
	// then send the results and finally show the trial labeled 'bye'
	Sequence (  
	"preload_fam_block",
	"fam_block" ) ;


	Template ( GetTable ( "fam_block_test.csv" ) ,
	    fam_block  =>
	    newTrial ( "fam_block" ,
		      defaultText
		      .print()
		      ,
	    newImage ( "fixation_cross" ,  "fixation.jpg" )
	        . size ( 300 ,  300 )
	        . print ( )
	        . log ( )
	    ,
	    newTimer ( "fam_fixation" ,  500 )
	        . start ( )
	        . wait ( )
	    ,
	    getImage ( "fixation_cross" )
	        . remove ( )
	    ,
	    newMediaRecorder ( "fam_recorder" ,  "audio" )
	        . hidden ( )
	        . record ( )
	        . log ( )
	    ,
	    newImage ( "fam_picture" ,  fam_block . picture )
	        . size ( 300 ,  300 )
	        . print ( )
	    ,
	    newTimer ( "fam_trial" ,  2000 )
	        . start ( )
	        . wait ( )
	        . log ( )
	    ,
	    getImage ( "fam_picture" )
	        . remove ( )
	    ,
	    newTimer ( "post_trial" ,  1500 )
	        . start ( )
	        . wait ( )
	        . log ( )
	    ,
	    getMediaRecorder ( "fam_recorder" )
	        . stop ( )
	        . remove ( )
		. log ( )
	    )
		  
	    . log (  "ProlificID"  ,  getVar ( "ProlificID" )  )
	    . log (  "Participant_ID" ,  fam_block . sub_id )
	    . log (  "Session" ,  fam_block . session )
	    . log (  "Target_word" ,  fam_block . target  )
	    . log (  "Distractor_word" ,  fam_block . distractor )
	    . log (  "Condition" ,  fam_block . condition )
	    . log (  "Conditionletter" ,  fam_block . conditionletter )
	

	) ;
	

	
