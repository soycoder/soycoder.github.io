<script>
	import Timeline from '$lib/components/Timeline.svelte';
	import TimelineItem from '$lib/components/TimelineItem.svelte';
	import TimelineSeparator from '$lib/components/TimelineSeparator.svelte';
	import TimelineDot from '$lib/components/TimelineDot.svelte';
	import TimelineConnector from '$lib/components/TimelineConnector.svelte';
	import TimelineContent from '$lib/components/TimelineContent.svelte';
	import TimelineOppositeContent from '$lib/components/TimelineOppositeContent.svelte';

	const colors = ['#7CD5E2', '#FEC048', '#DD84C1', '#FB6958'];

	const items = [
		// 1 Year
		{
			index: 1,
			year: 'October, 2018',
			title: 'Moddang Bootcamp 2018',
			description:
				'เข้าร่วมการอบรมและแข่งขัน MODDANG: Boot Camp, Real-World Data Science Challenges, Thailand, 2018.',
			imgSrc: '1_4-MOD-1.jpg'
		},
		{
			index: 2,
			year: 'November, 2018',
			title: 'The 2018 ICPC Asia Bangkok Programming Contest',
			description:
				'เข้าร่วมการแข่งขันการเขียนโปรแกรม The 2018 ICPC Asia Bangkok Programming Contest, at (ICT) Mahidol University',
			imgSrc: '1_1-icpc.jpeg'
		},
		{
			index: 3,
			year: 'February, 2019',
			title: 'National Software Contest (NSC) 2019',
			description: 'การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 21 (NSC2019)',
			imgSrc: '1_2-nsc.jpg'
		},
		{
			index: 4,
			year: 'August, 2019',
			title: 'Raspberry Pi Programming for Investigation 2019',
			description: 'เข้าร่วมอบรม Raspberry Pi Programming for Investigation at Chiang Rai',
			imgSrc: '1_5-RaspPi.jpeg'
		},
		{
			index: 5,
			year: 'October, 2019',
			title: '2019 IEEE 8th Global Conference on Consumer Electronics (GCCE)',
			description:
				'เข้าร่วมการนำเสนอผลงาน ในงาน Global Conference on Consumer Electronics (GCCE) ครั้งที่ 8 ณ โอซาก้า, ประเทศญี่ปุ่น',
			imgSrc: '1_3-GCCE-2.JPG'
		},

		// 2 Year
		{
			index: 6,
			year: 'November, 2019',
			title: 'The 2019 ICPC Asia Bangkok Programming Contest, at (ENG) Chulalongkorn University.',
			description:
				'เข้าร่วมการแข่งขันการเขียนโปรแกรม The 2019 ICPC Asia Bangkok Programming Contest, at (ENG) Chulalongkorn University.',
			imgSrc: '2_1-icpc.jpg'
		},
		{
			index: 7,
			year: 'February, 2020',
			title: 'National Software Contest (NSC) 2020',
			description: 'การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 22 (NSC2020)',
			imgSrc: '2_2-nsc.jpg'
		},
		{
			index: 8,
			year: 'February, 2020',
			title: 'MODDANG: Boot Camp, Real-World Data Science Challenges, 2020',
			description:
				'เข้าร่วมการอบรม MODDANG: Boot Camp, Real-World Data Science Challenges, Thailand, 2020.',
			imgSrc: '2_3-MOD-2.jpg'
		},
		// 3 Year
		{
			index: 9,
			year: 'October, 2020',
			title: 'the 2020 APAC HPC-AI Competition',
			description:
				'การอบรมและแข่งขันเร่งกำลังโมเดลปัญญาประดิษฐ์บนระบบประมวลผลสมรรถนะสูง เอชพีซี-เอไอ แห่งภูมิภาคเอเชียแปซิฟิก (2020 APAC HPC-AI)',
			imgSrc: '3_1-hpcai.jpg'
		},
		{
			index: 10,
			year: 'February, 2021',
			title: 'National Software Contest (NSC) 2021',
			description: 'การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 23 (NSC2021)',
			imgSrc: '3_2-nsc.jpg'
		},
		{
			index: 11,
			year: 'July, 2021',
			title: 'The 9th Asia Undergraduate Conference on Computing : AUCC2021',
			description:
				'เข้าร่วมนำเสนอผลงานวิชาการ และได้รับรางวัลผลงานวิจัยในการประชุมวิชาการระดับปริญญาตรีด้านคอมพิวเตอร์ภูมิภาคเอเชีย ครั้งที่ 9 (The 9th Asia Undergraduate Conference on Computing : AUCC2021)',
			imgSrc: '3_3-aucc.jpg'
		},
		// 4 Year
		{
			index: 12,
			year: 'October, 2021',
			title: 'Thailand Machine Learning for Chemistry (TMLCC)',
			description: 'เข้าร่วมการแข่งขันโครงการ Thailand Machine Learning for Chemistry (TMLCC)',
			imgSrc: '4_1-TMLCC.jpg'
		},
		{
			index: 13,
			year: 'November, 2021',
			title: 'Thailand Research Expo 2021',
			description:
				'เข้าร่วมกิจกรรมการประกวดผลงานนวัตกรรมสายอุดมศึกษา ประจำปี 2564 ในงาน “มหกรรมงานวิจัยแห่งชาติ 2564 (Thailand Research Expo 2021)” โดย สำนักงานการวิจัยแห่งชาติ (วช.)',
			imgSrc: '4_2-tr-expo-2.jpg'
		},
		{
			index: 14,
			year: 'November, 2021',
			title: 'The 4th APAC HPC-AI 2021',
			description:
				'⭐ การแข่งขันเร่งกำลังโมเดลปัญญาประดิษฐ์บนระบบประมวลผลสมรรถนะสูง เอชพีซี-เอไอ แห่งภูมิภาคเอเชียแปซิฟิก (The 4th APAC HPC-AI 2021)',
			imgSrc: '4_3-hpcai-1.JPG'
		},
		{
			index: 15,
			year: 'February, 2022',
			title: 'National Software Contest (NSC) 2022',
			description: '⭐ การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 24 (NSC2022)',
			imgSrc: '4_4-nsc.jpg'
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
				<TimelineDot
					style={`background-color: ${
						colors[(item.index - 1) % colors.length]
					}; border-color: #fff;`}
				/>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3 class="content-title">{item.title}</h3>
				<div>
					<img class="content-img" src={`images/activity/${item.imgSrc}`} alt={item.title} />
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
		/* margin-top: 1rem; */
		color: #d1d3dd;
		font-weight: lighter;
		padding: 0.5rem 0;
	}

	.content-img {
		padding-top: 0.5rem;
	}
</style>
