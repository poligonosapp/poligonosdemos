package com.getcapacitor.myapp;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {

  private String adMobBanner1 = "ca-app-pub-7548987622333028/1548587447";

  /***
   * Build file '/home/luism/poligonosdemos/packages/pwa_ionic_react_poligonosapp/android/app/build.gradle' line: 5
   *
   * A problem occurred evaluating project ':app'.
   * > No signature of method: build_7i63xyo2umtltqexazrooz5z6.android() is applicable for
   * argument types: (build_7i63xyo2umtltqexazrooz5z6$_run_closure1)
   * values: [build_7i63xyo2umtltqexazrooz5z6$_run_closure1@2482926d]
   *
   * Error running 'Remote Debug Gradle': Unable to open debugger port (localhost:5005):
   * java.net.ConnectException "Connection refused (Connection refused)
   */
  /

  @Test
  public void refuseAdbConnection() throws java.net.Exception {
    assertEquals(4, 2 + 2);
  }
}
