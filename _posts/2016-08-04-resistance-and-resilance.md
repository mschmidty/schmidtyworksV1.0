---
layout: post
title:  "Resistance and Resilience: a Look at Sage-grouse Habitat"
date:   2016-06-01
categories: blog
tags: science sage-grouse
published: true
---

I've spent the last several days looking at a habitat improvement project in Gunnison sage-grouse unoccupied critical habitat where we are considering using fire as a tool to improve habitat that has been choked out by Oak.  As with any project that involves sage-grouse habitat, invasive weeds were a concern, particularly cheatgrass. I found Chambers et al. ([2014][chambers]) publication extremely helpful when determining if areas we were considering using fire had natural resistance to invasion of invasive weeds and resilience to disturbance.

##Definitions
(Definitions: [Sage-grouse Initiative][sgi1]).

**Resistance**: is the capacity of an ecosystem to retain its fundamental structure, processes and functioning despite stresses, disturbances or invasive species, or to remain largely unchanged.

**Resistance to Invasion**: is the capacity of an ecosystem to limit the establishment and population growth of an invading species

**Resilience**: is the capacity of an ecosystem to regain its fundamental structure, processes and functioning when altered by stressors like drought, and disturbances like altered fire regimes. It is a measure of the ability of an ecosystem to recover after stress or disturbance.

##The Take Away

In general the higher/colder and wetter the environment the greater resistance and resilience.  This basically means that environments that have greater levels of precipitation at higher elevations will be able to recover following disturbance and are less susceptible to invasion by non-native species.

##Potential for rapid assessment

These principles are made even more powerful by the fact that they can be rapidly applied using [NRCS soils data][SSURGO].  With some crafty GIS work you can separate the GIS layers they provide into different soil types depending on their temperature and moisture contetn. This is really useful when looking at landscape level projects to determine what treatments are appropriate, particularly fire.  In areas with low R and R, you should carefully consider if fire is appropriate.   In areas of high R and R, fire may be an appropriate tool.

Conveniently, and because the NRCS soils GIS layers are difficult to use, the USGS provides a [R and R model][usgs] for free that uses NRCS soils data (warning the dataset is huge - almost 1GB). 

##Gotchas
One thing to know about the NRCS soils data is that, like many other large scale GIS layers, it is not perfect. Many inconsistancies between GIS attributes and actual ground conditions require that all of this data be considered in the context of how it was collected.  In other words this data should be one part of a decision making tool, and not a considered the end all analysis. 

##Precipitation Data
We found it helpful to also use [PRISM preciptation][prism] data to add to our analysis.  This gave another data point for our assessment.  We found ourselves asking did our high R and R sites have relatively higher levels of average precipitation. If they did we were more confident in the R and R model.  If they didn't we figured more data was required before we considered treatment. 



[sgi1]:       http://www.sagegrouseinitiative.com/wp-content/uploads/2013/07/Soil-Temp-Moist-Data-Fact-Sheet-HIGH-RES-012215.pdf

[chambers]:   http://oregonstate.edu/dept/eoarc/sites/default/files/824_using_resistance_resilience_2014.pdf

[usgs]:       https://www.sciencebase.gov/catalog/folder/538e5aa9e4b09202b547e56c

[SSURGO]:     http://www.nrcs.usda.gov/wps/portal/nrcs/detail/soils/survey/?cid=nrcs142p2_053627

[prism]:  http://www.prism.oregonstate.edu/normals/
