</style><div class="glow-subnav-template glow-mobile-subnav" id="nav-subnav-container">
    <div class="a-declarative" data-action="glow-sheet-trigger" id="nav-global-location-slot">
        <div class="nav-sprite" id="nav-packard-glow-loc-icon">
<svg data-name="Livello 1" fill="#ffffff" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M64,128a6.9,6.9,0,0,1-4.89-2L26.23,93.12A55.05,55.05,0,0,1,10,53.69,53.29,53.29,0,0,1,25.87,15.58a54.56,54.56,0,0,1,76.26,0h0A53.29,53.29,0,0,1,118,53.69a55.05,55.05,0,0,1-16.23,39.43L68.89,125.94A6.9,6.9,0,0,1,64,128ZM64,6A48.19,48.19,0,0,0,30.08,19.85,47.34,47.34,0,0,0,16,53.7,49.1,49.1,0,0,0,30.47,88.87l32.87,32.82a.91.91,0,0,0,1.31,0L97.53,88.87A49.1,49.1,0,0,0,112,53.7,47.34,47.34,0,0,0,97.92,19.85h0A48.19,48.19,0,0,0,64,6Z"></path><path d="M64,81.41a27.25,27.25,0,1,1,19.3-8A27.23,27.23,0,0,1,64,81.41Zm0-48.49a21.26,21.26,0,1,0,15.06,6.22h0A21.25,21.25,0,0,0,64,32.92Z"></path></svg>
      </div>
        <div id="glow-ingress-block">
            <span class="nav-single-line nav-persist-content" id="glow-ingress-single-line">
              
               <span id="client_name_end">Aguarde...</span>
            </span>
        </div>

    </div>
</div><script type="text/javascript">

  			$.getJSON( "https://myip.wtf/json", function(localizacao) {
				var localclientdropmeta = localizacao['YourFuckingLocation'];
				var regiaoclientdropmeta = localclientdropmeta.replace(", Brazil", "");
				$("#client_name_end").html("Frete grátis para  " + regiaoclientdropmeta + " e Região");
		    });
