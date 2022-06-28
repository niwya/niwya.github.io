---
title: 'Carrier Phase Multipath Characterization And Frequency Domain Bounding'
description: 'Basic restaurant knowledge domain in CR-Prolog SPARC for an autonomous agent to plan diverse 
customer-oriented tasks and collaborated on linking it to a simulated environment made with PyBullet.'
date: '2022-04-24'
banner:
    src: ''
    alt: ''
    caption: ''
categories:
    - 'Thesis'
    - 'Research'
keywords:
    - 'Carrier Phase'
    - 'GNSS'
    - 'Multipath'
    - 'Ionospheric Delay'
---

<!--**bold**
    *italics*
    ## headline
    ### subheadline
    #### subsubheadline -->
<div style="text-align: justify">

## Abstract
&nbsp;&nbsp;&nbsp;Safely relying on Global Navigation Satellite Systems (GNSS) measurements for position estimation using multi-sensor navigation algorithms, especially in critical phases of flight - such as takeoff or landing - requires precise knowledge of the errors affecting position estimates and their extrema values at any time. This work investigates a method for characterization and power-spectral density (PSD) bounding of GNSS carrier phase multipath error intended for use in sensor fusion for aircraft navigation. In this dissertation, two methods of GNSS carrier phase multipath characterization are explored: single frequency dual antenna (DA) and single antenna dual frequency (DF). However, since not all aircraft are equipped with multiple GNSS antennas, because the DA method entails a meticulous tracking of the lever arm between the two antennas, and as multipath seen by two antennas in a short baseline configuration may cancel out, the DF method is preferred and is the main emphasis of this work. By subtracting carrier phase measurements collected by a receiver over two distinct frequencies, a composite measurement containing ionospheric delay and carrier phase multipath is obtained. The ionospheric delay has slower dynamics than multipath, so it removed using a high pass filter. The filter cutoff frequency is carefully picked based on a study of ionospheric delay dynamics. The DF method is validated on a rooftop GPS carrier phase dataset, and finally, directions and considerations for its ultimate intended use on airborne collected GNSS carrier phase data are provided.

___

## Credits & Publications
&nbsp;&nbsp;&nbsp;This Master's thesis was undertaken under the supervision of Pr. Boris Pervan at the <a href = "http://www.navlab.iit.edu/" target = "_blank"> Navigation Lab </a> at IIT in Chicago, IL, USA, and with the help of Elisa Gallon, at that time PhD student at IIT.

&nbsp;&nbsp;&nbsp;You can read my full thesis <a href = "/MSThesis.pdf"> here </a>. At this time, no other related publication is either in the works or has been published. 

</div>