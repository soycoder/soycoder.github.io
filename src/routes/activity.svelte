<script>
	import Timeline from '$lib/components/Timeline.svelte';
	import TimelineItem from '$lib/components/TimelineItem.svelte';
	import TimelineSeparator from '$lib/components/TimelineSeparator.svelte';
	import TimelineDot from '$lib/components/TimelineDot.svelte';
	import TimelineConnector from '$lib/components/TimelineConnector.svelte';
	import TimelineContent from '$lib/components/TimelineContent.svelte';
	import TimelineOppositeContent from '$lib/components/TimelineOppositeContent.svelte';
	let src = '$images/activity/1_1-icpc.jpeg';


	const colors = [	
		'#7CD5E2',
		'#FEC048',
		'#DD84C1',
		'#FB6958'
	];

	const items = [
		{
			index: 1,
			year: 'November, 2018',
			title: 'The 2018 ICPC Asia Bangkok Programming Contest',
			description: 'เข้าร่วมการแข่งขันการเขียนโปรแกรม The 2018 ICPC Asia Bangkok Programming Contest, at (ICT) Mahidol University',
			imgSrc: '1_1-icpc.jpeg'
		},
		{
			index: 2,
			year: '1969',
			title: 'First online message',
			description: 'The first online message was sent.',
			
		},
		{
			index: 3,
			year: '1971',
			title: 'First Email',
			description: 'The first network email was sent by computer engineer Ray Tomlinson.',
			
		},
		{
			index: 3,
			year: '1991',
			title: 'First WebPage',
			description: 'The first web page went live.',
			
		},

		{
			index: 3,
			year: '1995',
			title: 'Amazon Launch',
			description: 'Amazon was founded by Jeff Bezos from his garage.',
			color: colors.first
		},
		{
			index: 3,
			year: '1998',
			title: 'Google Launch',
			description: 'Google was founded by Sergey Brin and Larry Page.',
			
		},
		{
			index: 3,
			year: '2004',
			title: 'Facebook Launch',
			description: 'A Harvard sophomore named Mark Zuckerberg launches The Facebook.',
			
		},
		{
			index: 3,
			year: '2022',
			title: '5 billion internet users',
			description: 'More than 5 billion internet users around the globe.',
			
		}
	];
</script>

<Timeline
	position="alternate"
	style={`
  border-radius: 3%;
  padding: 1rem;
  `}
>
	{#each items as item}
		<TimelineItem>
			<TimelineOppositeContent slot="opposite-content">
				<p class="oposite-content-title">{item.year}</p>
			</TimelineOppositeContent>

			<TimelineSeparator>
				<TimelineDot style={`background-color: ${colors[(item.index-1)%colors.length]}; border-color: #fff;`} />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3 class="content-title">{item.title}</h3>
				<div>
					<img src="https://images.freeimages.com/images/large-previews/1d2/music-nightclub-1420666.jpg" alt="A man dances.">
				</div>
				<p class="content-description">{item.description}</p>
			</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>

<style>
	.oposite-content-title {
		margin: 0;
		padding: 0;
	}
	.content-title {
		margin: 0;
		padding: 0;
	}

	.content-description {
		margin: 0;
		padding: 0;
		margin-top: 1rem;
		color: #d1d3dd;
		font-weight: lighter;
		padding: 0.5rem 0;
	}
</style>
