	// DebugOff ()
	

	// Show the 'intro' trial first, then all the 'experiment' trials in a random order
	// then send the results and finally show the trial labeled 'bye'
	Sequence (  
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
	    )
		  
	    . log (  "ProlificID"  ,  getVar ( "ProlificID" )  )
	    . log (  "Participant_ID" ,  fam_block . sub_id )
	    . log (  "Session" ,  fam_block . session )
	    . log (  "Target_word" ,  fam_block . target  )
	    //. log (  "Distractor_word" ,  fam_block . distractor )
	    . log (  "Condition" ,  fam_block . condition )
	    . log (  "Conditionletter" ,  fam_block . conditionletter )
	

	) ;
	

	
