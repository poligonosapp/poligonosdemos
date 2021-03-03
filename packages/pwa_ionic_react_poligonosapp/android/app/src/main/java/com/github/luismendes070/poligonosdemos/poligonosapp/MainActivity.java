package com.github.luismendes070.poligonosdemos.poligonosapp;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.google.android.gms.ads.AdSize;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.FirebaseDatabase;

import java.io.FileInputStream;
import java.util.ArrayList;

import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.initialization.InitializationStatus;
import com.google.android.gms.ads.initialization.OnInitializationCompleteListener;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;

import android.util.Log;

public class MainActivity extends BridgeActivity {

  private static final String TAG = MyActivity.class.getSimpleName();

  private AdView mAdView;

  private FirebaseOptions defaultOptions;
  private FirebaseOptions otherAppConfig;

  private String adMobBanner1 = "ca-app-pub-7548987622333028/1548587447";



  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    if (savedInstanceState != null) {
      Log.d(TAG, "onCreate() Restoring previous state");
      /* restore state */
    } else {
      Log.d(TAG, "onCreate() No saved state available");
      /* initialize app */
    }

//ionic capacitor admob community
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{

      add(com.getcapacitor.community.admob.AdMob.class);

    }});

//AdMob
    MobileAds.initialize(this, new OnInitializationCompleteListener() {
      @Override
      public void onInitializationComplete(InitializationStatus initializationStatus) {

        AdView adView = new AdView(this);

        adView.setAdSize(AdSize.BANNER);

        adView.setAdUnitId(R.id.adView);
// TODO: Add adView to your view hierarchy.

        mAdView = findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder().build();
        mAdView.loadAd(adRequest);

        mAdView.setAdListener(new AdListener() {
          @Override
          public void onAdLoaded() {
            // Code to be executed when an ad finishes loading.
          }

          @Override
          public void onAdFailedToLoad(LoadAdError adError) {
            // Code to be executed when an ad request fails.
          }

          @Override
          public void onAdOpened() {
            // Code to be executed when an ad opens an overlay that
            // covers the screen.
          }

          @Override
          public void onAdClicked() {
            // Code to be executed when the user clicks on an ad.
          }

          @Override
          public void onAdLeftApplication() {
            // Code to be executed when the user has left the app.
          }

          @Override
          public void onAdClosed() {
            // Code to be executed when the user is about to return
            // to the app after tapping on an ad.
          }
        });

        AdSize adSize = new AdSize(300, 50);


      }
    });

    FirebaseOptions options = FirebaseOptions.builder()
            .setCredentials(GoogleCredentials.getApplicationDefault())
            .setDatabaseUrl("https://poligonosapp-default-rtdb.firebaseio.com")
            .build();

    FirebaseApp.initializeApp(options);

    FileInputStream refreshToken = new FileInputStream("google-services.json");

    FirebaseOptions options = FirebaseOptions.builder()
            .setCredentials(GoogleCredentials.fromStream(refreshToken))
            .setDatabaseUrl("https://poligonosapp-default-rtdb.firebaseio.com")
            .build();

    FirebaseApp.initializeApp(options);

    FirebaseApp.initializeApp();

    // Initialize the default app
    FirebaseApp defaultApp = FirebaseApp.initializeApp(defaultOptions);

    System.out.println(defaultApp.getName());  // "[DEFAULT]"

// Retrieve services by passing the defaultApp variable...
    FirebaseAuth defaultAuth = FirebaseAuth.getInstance(defaultApp);
    FirebaseDatabase defaultDatabase = FirebaseDatabase.getInstance(defaultApp);

// ... or use the equivalent shorthand notation
    defaultAuth = FirebaseAuth.getInstance();
    defaultDatabase = FirebaseDatabase.getInstance();

    // Initialize the default app
    FirebaseApp defaultApp = FirebaseApp.initializeApp(defaultOptions);

// Initialize another app with a different config
    FirebaseApp otherApp = FirebaseApp.initializeApp(otherAppConfig, "other");

    System.out.println(defaultApp.getName());  // "[DEFAULT]"
    System.out.println(otherApp.getName());    // "other"

// Use the shorthand notation to retrieve the default app's services
    FirebaseAuth defaultAuth = FirebaseAuth.getInstance();
    FirebaseDatabase defaultDatabase = FirebaseDatabase.getInstance();

// Use the otherApp variable to retrieve the other app's services
    FirebaseAuth otherAuth = FirebaseAuth.getInstance(otherApp);
    FirebaseDatabase otherDatabase = FirebaseDatabase.getInstance(otherApp);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});



  }

}
