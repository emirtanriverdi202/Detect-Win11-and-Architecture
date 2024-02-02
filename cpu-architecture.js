navigator.userAgentData.getHighEntropyValues(["architecture", "bitness"])
 .then(ua => {
   if (navigator.userAgentData.platform === "Windows") {
     if (ua.architecture === 'x86') {
       if (ua.bitness === '64') {
         console.log("x86_64");
       }
       else if (ua.bitness === '32') {
         console.log("x86");
       }
     }
     else if (ua.architecture === 'arm') {
       if (ua.bitness === '64') {
         console.log("ARM64");
       }
       else if (ua.bitness === '32') {
         console.log("ARM32");
       }
     }
   }
   else {
     console.log("Not running on Windows");
   }
 });