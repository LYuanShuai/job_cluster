<%@ taglib prefix="ff4j" uri="http://www.ff4j.org/taglibs/ff4j" %>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8">
<title>Features Flags 4 Java</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="Cedrick LUNVEN">
<link href="css/bootstrap.css" rel="stylesheet">
<style type="text/css">
body {
	padding-top: 60px;
	padding-bottom: 40px;
}
</style>

<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
    <![endif]-->
<script src="js/jquery.js"></script>

</head>

<body>

	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<button type="button" class="btn btn-navbar" data-toggle="collapse"
					data-target=".nav-collapse">
					<span class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<img alt=""  style="margin-top:5px;height:30px;width:70px;float:left" 
					src="data:image/png;base64,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" />
				<a class="brand" href="#" style="color:#00ab8b">&nbsp;Showcase Application </a>
				
				<div style="float:right">
				<a href="<%=request.getContextPath()%>/ff4j-console/" class="btn btn-info" target="_blank">
			<i class="icon-list-alt icon-white"></i>&nbsp;Console
		</a>
		&nbsp;&nbsp;
		<a href="<%=request.getContextPath()%>/api/ff4j" class="btn btn-warning" >
			<i class="icon-map-marker icon-white"></i>&nbsp;RestAPI
		</a>
		&nbsp;&nbsp;
		</div>
			</div>
		</div>
	</div>

	<div class="container">
	
	   <div class="jumbotron">
        <h1>Try out Feature Flipping !</h1>
        <p class="lead">Enable features at runtime through dedicated console or API.</p>
        <p>Part of this page are registered as <b>features</b> and will display only if the related feature
        is <b>enabled.</b>
      
      </div>

		<!-- Example row of columns -->
		<div class="row-fluid">
			<ul class="thumbnails" >
  			<li class="span4" style="background-color:black;color:white;">
    			<div class="thumbnail" style="border:2px solid #555555">
      			<img src="img/astre-mercure.jpg" >
      			<h3 style="text-align:center">Mercury</h3>
      			
      			<!-- Test related to Features Flags -->
      			<ff4j:enable featureid="mercury-desc">
      			
      				<p style="text-align:justify">
      				 Mercury is the smallest planet in the Solar System. It is the closest planet to the sun. 
      				 It makes one trip around the Sun once every 87.969 days.Mercury is bright when it is visible 
      				 from Earth, ranging from ???2.0 to 5.5 in apparent magnitude. It cannot be easily seen as it is 
      				 usually too close to the Sun. Because Mercury is normally lost in the glare of the Sun (except 
      				 during a solar eclipse), Mercury can only be seen in the morning or evening twilight.[...]
      				</p>
      			</ff4j:enable>
      			
      			<ff4j:enable featureid="mercury-link">
      				<p style="text-align:center"><a class="btn btn-warning" href="http://simple.wikipedia.org/wiki/Mercury_(planet)">
      				<i class="icon-book icon-white"></i>&nbsp;Wikipedia &raquo;</a></p>
      			</ff4j:enable>
      			
    			</div>
  			</li>
  			
  			<li class="span4" style="background-color:black;color:white">
    			<div class="thumbnail" style="border:2px solid #555555">
      			<img src="img/astre-venus.jpg" style="height:240px">
      			<h3 style="text-align:center">Venus</h3>
      			
      			<ff4j:enable featureid="venus-desc">
      			   <p style="text-align:justify">Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. 
      				The planet is named after the Roman goddess of love and beauty.
      				After the Moon, it is the brightest natural object in the night sky, reaching an apparent magnitude of ???4.6, 
      				bright enough to cast shadows. Because Venus is an inferior planet from Earth, it never appears to venture far 
      				from the Sun: its elongation reaches a maximum of 47.8??. Venus reaches its maximum brightness[...]</p>
      			</ff4j:enable>
      			
      			<ff4j:enable featureid="venus-link">
      				<p style="text-align:center"><a class="btn btn-warning" href="http://en.wikipedia.org/wiki/Venus">
      				<i class="icon-book icon-white"></i>&nbsp;Wikipedia &raquo;</a></p>
      			</ff4j:enable>
    			</div>
  			</li>
  			<li class="span4" style="background-color:black;color:white;">
    			<div class="thumbnail" style="border:2px solid #555555">
      			<img src="img/astre-terre.jpg" style="height:240px">
      			<h3 style="text-align:center">Earth</h3>
      			<ff4j:enable featureid="earth-desc">
      				<p style="text-align:justify">Earth is the third planet from the Sun, and the densest and fifth-largest of the eight planets in 
      				the Solar System. It is also the largest of the Solar System's four terrestrial planets. It is sometimes referred to as the 
      				world or the Blue Planet. Earth formed approximately 4.54 billion years ago, and life appeared on its surface within its 
      				first billion years. Earth's biosphere then significantly altered the atmospheric and other basic physical conditions[...]</p>
      			</ff4j:enable>
      			
      			<ff4j:enable featureid="earth-link">
      				<p style="text-align:center;margin-bottom:10px">
      				<a class="btn btn-warning" href="http://en.wikipedia.org/wiki/Earth">
      				<i class="icon-book icon-white"></i>&nbsp;Wikipedia &raquo;</a></p>
      			</ff4j:enable>
      			
    			</div>
  			</li>
  			</ul>
		</div>
		
		<div class="row-fluid">
			<ul class="thumbnails" >
  			<li class="span4" style="background-color:black;color:white">
    			<div class="thumbnail" style="border:2px solid #555555">
      			<img src="img/astre-mars.jpg" style="height:240px">
      			<h3 style="text-align:center">Mars</h3>
      			<ff4j:enable featureid="mars-desc">
      				<p style="text-align:justify">Mars is the fourth planet from the Sun and the second smallest planet in the 
      				Solar System. Named after the Roman god of war, it is often described as the "Red Planet", as the iron oxide 
      				prevalent on its surface gives it a reddish appearance. Mars is a terrestrial planet with a thin atmosphere, 
      				having surface features reminiscent both of the impact craters of the Moon and the volcanoes, valleys, deserts, 
      				and polar ice caps of Earth[...]</p>
      			</ff4j:enable>
      			<ff4j:enable featureid="mars-link">
      				<p style="text-align:center">
      				<a class="btn btn-success" href="hhttp://en.wikipedia.org/wiki/Mars">
      				<i class="icon-book icon-white"></i>&nbsp;Wikipedia &raquo;</a></p>
      			</ff4j:enable>
    			</div>
  			</li>
  			<li class="span4" style="background-color:black;color:white">
    			<div class="thumbnail" style="border:2px solid #555555">
      			<img src="img/astre-jupiter.jpg" style="height:240px">
      			<h3 style="text-align:center">Jupiter</h3>
      			<ff4j:enable featureid="jupiter-desc">
      				<p style="text-align:justify">Jupiter is the fifth planet from the Sun and the largest planet in the Solar System. 
      				It is a gas giant with mass one-thousandth that of the Sun but is two and a half times the mass of all the other 
      				planets in the Solar System combined. Jupiter is classified as a gas giant along with Saturn, Uranus and Neptune. 
      				Together, these four planets are sometimes referred to as the Jovian or outer planets. The planet was known by 
      				astronomers of ancient times[...]</p>
      			</ff4j:enable>
      			<ff4j:enable featureid="jupiter-link">
      				<p style="text-align:center">
      				<a class="btn btn-success" href="http://en.wikipedia.org/wiki/Jupiter">
      				<i class="icon-book icon-white"></i>&nbsp;Wikipedia &raquo;</a></p>
      			</ff4j:enable>
    			</div>
  			</li>
  			<li class="span4" style="background-color:black;color:white;">
    			<div class="thumbnail" style="border:2px solid #555555">
      			<img src="img/astre-saturne.jpg" style="height:240px">
      			<h3 style="text-align:center">Saturn</h3>
      			<ff4j:enable featureid="saturn-desc">
      			<p style="text-align:justify">Saturn is the sixth planet from the Sun and the second largest planet in the Solar System, after Jupiter. 
      			Named after the Roman god of agriculture, Saturn, its astronomical symbol (???) represents the god's sickle. Saturn is a gas giant with 
      			an average radius about nine times that of Earth. While only one-eighth the average density of Earth,  with its larger volume Saturn is 
      			just over 95 times more massive than Earth[...]</p>
      			</ff4j:enable>
      			<ff4j:enable featureid="saturn-link">
      				<p style="text-align:center;margin-bottom:10px">
      				<a class="btn btn-success" href="http://en.wikipedia.org/wiki/Saturn">
      				<i class="icon-book icon-white"></i>&nbsp;Wikipedia &raquo;</a></p>
      			</ff4j:enable>
    			</div>
  			</li>
  			</ul>
		</div>

		<footer>
			<p>&copy; <a href="http://ff4j.org">ff4j 2013-2015</a></p>
		</footer>

	</div>
	<!-- /container -->

	<script src="js/bootstrap-transition.js"></script>
	<script src="js/bootstrap-alert.js"></script>
	<script src="js/bootstrap-modal.js"></script>
	<script src="js/bootstrap-dropdown.js"></script>
	<script src="js/bootstrap-scrollspy.js"></script>
	<script src="js/bootstrap-tab.js"></script>
	<script src="js/bootstrap-tooltip.js"></script>
	<script src="js/bootstrap-popover.js"></script>
	<script src="js/bootstrap-button.js"></script>
	<script src="js/bootstrap-collapse.js"></script>
	<script src="js/bootstrap-carousel.js"></script>
	<script src="js/bootstrap-typeahead.js"></script>
</body>
</html>
