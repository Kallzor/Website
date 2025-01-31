import React from "react";
import { useTranslation } from "react-i18next";
import ImageContent from "../components/ImageContent";
import img1 from "../img/misc/rsz_massan-006.jpg";
import img2 from "../img/misc/rsz_massan-122.jpg";
import img3 from "../img/misc/rsz_massan-001.jpg";
import img4 from "../img/misc/rsz_massan-123.jpg";
import img5 from "../img/misc/rsz_massan-090.jpg";
//import covid from "../img/misc/stop-covid.png";

export default function News() {
	const news = [
		{
			title: {
				en: "Prep-week has opened!",
				sv: "Prep-week har öppnat!",
			},

			image: img5,
			imageAlt: "",
			content: {
				en: "Read more about what prep week is and what events there is this year!",
				sv: "Läs mer om vad prep week är, vilka event det är i år och vart man skriver upp sig!",
			},
			linkTo: "/covid",
		},
		{
			title: {
				en: "Request a company",
				sv: "Önska ett företag",
			},
			image: img4,
			imageAlt: "",
			content: {
				en: "If there is a company you want to see at larv? Click here to wish the company and we will try to get the company to the fair",
				sv: "Har du ett företag du vill se på larv? Klicka hör för att önska ett företag som vi kommer försöka få med till mässan",
			},
			linkTo: "/onskaForetag",
		},
		{
			title: {
				en: "Join LARV",
				sv: "Delta i LARV",
			},
			image: img1,
			imageAlt: "",
			content: {
				en: "Week 3, 2022, is LARV. A week full of lectures, competitions, the fair and much more! Read more under Fair in the menu above.",
				sv: "Vecka 3, 2022, är det LARV. En vecka fylld av föreläsningar, tävlingar, mässan och mycket mer! Läs mer under Mässan i menyn ovan.",
			},
			linkTo: "/fair",
		},
		{
			title: {
				en: "Interest registration is now open!",
				sv: "Intresseanmälan öppen!",
			},
			image: img3,
			imageAlt: "",
			content: {
				en: "From now companies who wish to be a part of the fair can register here",
				sv: "Nu kan företag som vill delta på mässan anmäla sig här",
			},
			linkTo: "/organizations/initial-application",
		},
		{
			title: {
				en: "Website during construction",
				sv: "Hemsidan är under uppbyggnad",
			},
			image: img2,
			imageAlt: "",
			content: {
				en: "We are developing the website as fast as we can, but we apologize that not everything is completely done. If you discover any bugs or want to leave feedback, we are more than happy to receive this via email to it@larv.org",
				sv: "Vi håller på att utveckla hemsidan så fort vi bara kan, men ber om ursäkt att allting inte är helt finslipat. Upptäcker du några buggar eller vill lämna feedback tar vi mer än gärna emot detta via mail till it@larv.org",
			},
		},
		/*
		{
			title: {
				en: "Fair Guide for students",
				sv: "Mässguide för studenter",
			},
			image: img3,
			imageAlt: "",
			content: {
				en: "This year's fair is quite different than previous years. We have therefore made a full guide of how this fair works and what you can do to get the most out of LARV 2021.",
				sv: "Årets mässa är helt annorlunda än tidigare år. Vi har därför gjort en fullständig guide för hur denna mässa fungerar och vad du kan göra för att få ut det mesta av LARV 2021.",
			},
			linkTo: "/students/guide",
		},*/
	];

	const { t } = useTranslation();
	return (
		<>
			<h1>{t("GENERAL.NEWS")}</h1>
			<div className="NewsFlow">
				{news.map((newsItem) => (
					<ImageContent
						key={newsItem.title.en}
						title={newsItem.title}
						content={newsItem.content}
						image={newsItem.image}
						imageAlt={newsItem.imageAlt}
						linkTo={newsItem.linkTo}
					/>
				))}
			</div>
		</>
	);
}
