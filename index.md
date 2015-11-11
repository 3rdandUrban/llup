# The Limited Lifetime Ubiquitous Protocol (LLUP) Specification Development Project

## Summary

LLUP is a decentralized messaging protocol which facilitates the ability to broadcast notifications of the existence of time sensitive content related to a given subject matter, addressing this message to any person, place, or thing -- potentially -- without an immediate understanding ahead of time who the person, place, or thing might represent or apply to directly.

For example, if my desire is to bring a particular piece of content to the attention of people who live in the Salt Lake City, UT area who have an interest in live rock music, I would include in the outgoing message references of relevance to 'Salt Lake City, UT', 'live music', and 'rock' in hopes that this message might gain the attention of those people who live in the Salt Lake City, UT area who have specified an interest in rock music and attending live events via profile settings, or via a real-time search with an LLUP service provider.

## The LLUP Acronym

LLUP loosely stands for the Limited Lifetime Ubiquitous Protocol and, not by chance, is PULL spelled backwards. This specific acronym was chosen to not only represent the [key areas of the specification](/web/20100220015427/http://dev.llup.org/wiki/about/acronym) but to also suggest a PUSH/PULL approach to message dissemination and consumption, where the reversed PULL can also be viewed as 'the other side of push'. If you've ever attempted to pull open a glass door which is clearly labeled "LLUP", you should immediately understand the comparison. And if you've now just rolled your eyes wondering how on earth we geeks survive from day-to-day without any obvious form of social life, I assure you, you're not the first. ;-)

## The BLIP

At the heart of the LLUP specification is the term BLIP. The BLIP, often referred to as a BLIP message, is a piece of content, declared in a standard way**, which acts as a meta-data enriched pointer to the URI of the related content. Similar to a blip on a radar screen, a BLIP message represents a single flash of information which is only seen by those paying attention to a specific channel during the period of time the BLIP is in scope.

In the same way a blip on a radar screen represents a virtual pointer to an external physical object, a BLIP message represents a virtual pointer to the external data source where extended information can be found.

For example, a musician might provide information related to a show they're playing in their local area as a new blog entry on their MySpace page. Upon publication of that entry a BLIP message would be generated and pushed to a service provider. Within that message would be information related to the entry such as:

*   The bands name.
*   The bands genre.
*   A dereferencable pointer to the specific street address of the venue as well as the general geographic area where the show is taking place.
*   The date and time the show starts and the date and time the show ends.
*   Any additional pieces of information that would help people both find and filter the contained information.

Using the above items, and using the Atom syndication format as the body of our message, the related BLIP message would look something similar to,

	<?xml version="1.0" encoding="utf-8"?>
	<message xmlns="http://www.llup.org/blip#" xmlns:atom="http://www.w3.org/2005/Atom">
  		<reference href="http://amp.fm/band/foobarfighters/event/utahartsfestival/2008/08/28"/>
  		<scope start="2008-06-28T22:00:00Z" expire="2005-08-29T01:00:00Z">
			<relevance href="self://atom:entry/atom:category" type="application/atom+xml"/>
    			<relevance href="http://amp.fm/artist/foobarfighters//fans"/>
 		</scope>
  		<signature>mailto+http:sha1:f0411747d71a46d5c63ff40405e877f87dc9e228</signature>
 		<atom:entry xmlns="http://www.w3.org/2005/Atom">
		<atom:id>http://amp.fm/band/foobarfighters/event/utahartsfestival/2008/08/28//1</atom:id>
    		<atom:link rel="self" href="https://amp.fm/band/foobarfighters/event/utahartsfestival/2008/08/28" />
    		<atom:title>FooBar Fighters *ROCK* the Utah Arts Festival!</atom:title>
    		<atom:published>2008-08-25T10:05:33Z</atom:published>
    		<atom:author>
      		<atom:name>M. David Peterson</atom:name>
      			<atom:uri>http://xmlhacker.com/</atom:uri>
    		</atom:author>
    		<atom:summary>It's that time of year again for the Utah Arts Festival to hit Library Square, and this year is even better than last! Why?  Because we're headlining on Saturday night!  w00t!
    		</atom:summary>
    		<atom:category label="Utah Arts Festival" term="utah_arts_festival" scheme="http://personplacething.info/thing" />
    		<atom:category label="Salt Lake City" term="salt_lake_city" scheme="http://personplacething.info/place/us/ut" />
    		<atom:category label="Library Square" term="library_square" scheme="http://personplacething.info/place/us/ut/slc" />
    		<atom:category label="Music" term="music" scheme="http://personplacething.info/category" />
    		<atom:category label="Event" term="event" scheme="http://personplacething.info/category" />
    		<atom:category label="FooBar Fighters" term="foobar_fighters" scheme="http://personplacething.info/people/music/band" />
    		<atom:category label="Rock" term="rock" scheme="http://personplacething.info/thing/music/genre" />
  		</atom:entry>
	</message>

Once this message has been sent and its lifetime has come into [scope](/web/20100220015427/http://dev.llup.org/wiki/LLUP/scope/lifetime), anyone listening in via a subscription to a related channel, or performing a real-time search that matches one of these items, will be provided access to the original message to determine whether enough interest exists to request the extended information associated with the message. This extended information -- in this example the previously mentioned MySpace blog entry -- might include links to tracks from the bands latest album that can be streamed and/or downloaded, commentary from the band members related to what they have planned for the show, and anything else they might want to share with those paying attention to help them better understand who they are and why it's worth spending $10 to come see them live.

Or maybe it contains none of these things, instead providing personal thoughts and opinions about life in general. The point, of course, is not to specify what a BLIP message can or can not point to, and instead facilitate the ability for people to both broadcast and discover information in ways that respects an individuals privacy while at the same time opens up the opportunity to discover things of potential interest that would otherwise go completely unnoticed.

## The Push/Pull Mechanism

In the above example, while I might be subscribed to certain keywords, locales, and other topics of interest, due to the specific intent of the LLUP specification, a message is never pushed to anyone directly. Instead, the original message is pushed by its creator to an LLUP service provider where it is indexed and made available to be pulled via a subscription or direct search mechanism from those with interest in the related topics. In other words, the content of the message is only seen by those paying specific attention -- whether in person, via a software notification mechanism, or through a real-time search -- to the "radar screen" while this particular blip is in scope, based on its lifetime which is specified as part of the BLIP message. And it's here that exists the key to understanding the primary focus of the LLUP specification:

> Consumer discernment and choice as to what information they want to gain access to (the pull) while at the same time facilitating the ability for time sensitive information to extend it's reach to people who would otherwise never know this information was available (the push.)

## The Specification

In addition to an optional short summary, a BLIP message MUST include four primary pieces of information:

*   A [URI Reference](/web/20100220015427/http://dev.llup.org/wiki/LLUP/blip/element/reference)
    *   A pointer to the content that the BLIP describes.
*   A [Message Lifetime](/web/20100220015427/http://dev.llup.org/wiki/LLUP/scope/lifetime)
    *   A start [DateTime](/web/20100220015427/http://dev.llup.org/wiki/DateTime) and expiration [DateTime](/web/20100220015427/http://dev.llup.org/wiki/DateTime) which together represent a [lifetime](/web/20100220015427/http://dev.llup.org/wiki/LLUP/scope/lifetime) in which the message and related content is deemed relevant by the contents creator.
*   [Relevancy of Content](/web/20100220015427/http://dev.llup.org/wiki/LLUP/scope/relevance)
    *   Category(s) that are a part of defined or undefined vocabulary.
        *   The LLUP base reference uses the category element of the Atom Syndication Format to represent the categories in which a message should be indexed against.
    *   A [UriSignature](/web/20100220015427/http://dev.llup.org/wiki/UriSignature) or signatures of a person, place, or thing the message is targeted towards.
        *   The LLUP base reference uses the [relevance](/web/20100220015427/http://dev.llup.org/wiki/LLUP/scope/relevance) element to represent the [UriSignature](/web/20100220015427/http://dev.llup.org/wiki/UriSignature)(s) in which the message is targeted.
*   A [Digital Signature](/web/20100220015427/http://dev.llup.org/wiki/LLUP/blip/element/signature)
    *   A means of signing the message for reasons of verification of the original sender.

An extended, if not somewhat dated overview of LLUP [is available](/web/20100220015427/http://dev.llup.org/wiki/about/llup). In addition, a [collection of conversations](/web/20100220015427/http://dev.llup.org/wiki/BlipMessaging) from the [<span class="icon"></span>project mailing list](/web/20100220015427/http://groups.google.com/group/llup) has been loosely aggregated for those interested in use-case overviews of how blip messaging both can and is being used in the real-world.

A significant amount of additional content has been written and is available in various locations across the web. Please see: [<span class="icon"></span>Google: "Blip Messaging"](/web/20100220015427/http://www.google.com/search?q=%22blip%20messaging%22) to gain access to a comprehensive index of this content.

## ** Example LLUP Blip Implementations

While XML is the primary reference format of the LLUP specification, there is no requirement that a BLIP message must be encoded in the specified XML format. It is up to each service provider to choose which serialization formats they will support. However, there IS A requirement that the serialization format(s) used maintain a machine and human readable one-to-one mapping to the [LLUP RelaxNG reference schema](/web/20100220015427/http://dev.llup.org/wiki/llup/mapping/relaxng_compact_reference_schema).

As a source of reference, you can access [several example blip implementations](/web/20100220015427/http://dev.llup.org/wiki/reference/example/blips) in various formats including XML and JSON. Please keep in mind, however, that the samples are only meant to convey the general idea of what each serialization format might look like. As the specification continues to be refined, these examples will be updated to fall directly inline with the property names and and the expected data types their values will represent at that particular moment in time. Of course, as always, until the specification has reached an official "1.0" release state, any software developed prior to the specifications 1.0 release runs risk of being non-compliant with this final spec. In other words, if you choose to build software against any state of the specification prior to the official 1.0 release, you should expect to have to rewrite the portions of your software that is no longer compliant with the 1.0 specification.

## Draft Specification

The original [LLUP Specification XML Source](/web/20100220015427/http://dev.llup.org/browser/trunk/Specification/draft-ietf-llup-format-00.xml). Given the ongoing changes and refinements to the protocol, this document SHOULD NOT be used as a reference for implementing client or server support for the LLUP specification. An update to the specification source is in progress. We hope to have the next version of the specification available for review and comments over the course of the next two weeks, today being Friday, June 27th, 2008.

## Platform-specific Reference Projects

[Index of Platform-specific Reference Projects](/web/20100220015427/http://dev.llup.org/wiki/reference/platform/projects)

## Project Developers

Please see [Project Developers](/web/20100220015427/http://dev.llup.org/wiki/about/project/developers) for a listing of the LLUP project developers.

## Group Discussion

You can join in the public discussion via the LLUP Google Groups mailing list:
