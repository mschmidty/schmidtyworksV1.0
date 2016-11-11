---
layout: post
title:  "Resistance and Resilience: a Look at Sage-grouse Habitat"
date:   2016-06-01
categories: blog
tags: science sage-grouse
published: true
---

I've spent the last several days looking at a habitat improvement project in Gunnison sage-grouse unoccupied critical habitat. We are considering using fire to decrease oak and pinyon-juniper densities in sagebrush.  As with any project that involves sage-grouse habitat, invasive weeds were a concern - particularly cheatgrass. I found Chambers et al. ([2014][chambers]) publication extremely helpful when determining if our project area had natural resistance to invasion of invasive weeds and resilience to disturbance.  It was important to us that, although fire was the most economical way to treat areas, that habitat was ultimately improved and that we properly vetted our sites to determine if they would respond positively to fire.   

##Definitions
(Definitions: [Sage-grouse Initiative][sgi1]).

**Resistance**: is the capacity of an ecosystem to retain its fundamental structure, processes and functioning despite stresses, disturbances or invasive species, or to remain largely unchanged.

**Resistance to Invasion**: is the capacity of an ecosystem to limit the establishment and population growth of an invading species

**Resilience**: is the capacity of an ecosystem to regain its fundamental structure, processes and functioning when altered by environmental stresses like drought, and disturbances like altered fire regimes. It is a measure of the ability of an ecosystem to recover after stress or disturbance.

**Resistance and Resilience** = R and R. 

##The Take Away

In general the higher/colder and wetter the environment the greater resistance and resilience plant ecosystems have after a disturbance.  In other words, environments that have greater levels of precipitation, that occur at higher elevations will be able to recover following disturbance and are less susceptible to invasion by non-native species. On the other hand, habitats, such as the great basin, have a greater chance of not recovering or being dominated by non-native species after disturbnace because of how little precipitation falls on much of the state and how warm it is. While other areas - in Montana or North Dakato for instance - where it is wetter, have a better chance of recovering and maintaining a native population following disturbance. 

##How to determine your areas R and R

These principles are made even more powerful by the fact that they can be rapidly applied using [NRCS soils data][SSURGO].  With some crafty GIS work you can separate the GIS layers the [NRCS][SSURGO] provide into different soil types depending on their temperature and moisture content. This is really useful when looking at landscape level projects to determine what treatments are appropriate.  In areas with low R and R, you should carefully consider if fire is appropriate.   Conversely, in areas of high R and R, fire may be an appropriate tool.

Conveniently, and because the NRCS soils GIS layers are difficult to use, the USGS provides a [R and R model][usgs] for free that uses NRCS soils data (warning the dataset is huge - almost 1GB) for rapid assessment of areas for land management.

##Gotchas
One thing to know about the NRCS soils data, and the USGS model, is that, like many other large scale GIS layers, it is not perfect. Many inconsistencies between GIS attributes and actual ground conditions require that all of this data be considered in the context of how it was collected.  In other words these data should be one part of a decision making tool, and not a considered the end all analysis. 

##Precipitation Data
We found it helpful to also use [PRISM precipitation][prism] data to add to our analysis.  This gave another data point for our assessment as well as verified, or contradicted, the NRCS data.  We found ourselves asking did our high R and R sites have relatively higher levels of average precipitation. If they did, or didn't, match the R and R model there's still nothing better than ground truthing your data. 

##Conclusion
Although this is an awesome tool, it is important to remember that large scale models such as this assessment should not be taken on their own. Careful assessment and historical knowledge of your local environment should also definitely be considered. 



[sgi1]:       http://www.sagegrouseinitiative.com/wp-content/uploads/2013/07/Soil-Temp-Moist-Data-Fact-Sheet-HIGH-RES-012215.pdf

[chambers]:   http://oregonstate.edu/dept/eoarc/sites/default/files/824_using_resistance_resilience_2014.pdf

[usgs]:       https://www.sciencebase.gov/catalog/folder/538e5aa9e4b09202b547e56c

[SSURGO]:     http://www.nrcs.usda.gov/wps/portal/nrcs/detail/soils/survey/?cid=nrcs142p2_053627

[prism]:  http://www.prism.oregonstate.edu/normals/
