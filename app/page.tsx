import { Card, CardBody } from "@nextui-org/card"
import { Chip } from "@nextui-org/chip";
import Image from "next/image"

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">

			<Card shadow="lg">
				<CardBody>
					<div className="flex flex-col w-full">
						<div className="flex justify-center">
							<Image
							    src="/CooperCodes.png"
								width={200}
								height={200}
								alt="Cooper Codes Profile Picture"
								className="justify-center rounded-lg border-large"
							
							/>
						</div>
						<div className="flex justify-center pt-2">
							<h2 className="text-3xl font-bold">Cooper Codes</h2>
						</div>
						<div className="flex justify-center m-4 gap-4">
							<Chip
							   variant="shadow"
							   color="primary"
							   size="sm"							
							>
								Next.js 13
							</Chip>
							<Chip
							   variant="shadow"
							   color="primary"
							   size="sm"							
							>
								NextUI
							</Chip>
							<Chip
							   variant="shadow"
							   color="primary"
							   size="sm"							
							>
								Youtuber
							</Chip>
						</div>
						<div className="flex justify-center max-w-sm">
							<p className="text-lg text-center font-semibold">
								I am pursuing a Master in Computer Science. I enjoy taking walks in New York City!.
							</p>
						</div>
						<div className="flex flex-col justify-center gap-4 pt-4">
							<a href="https://youtube.com/CooperCodes" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">YouTube</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://github.com/vivibarragango" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Git Hub</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://thecodeletter.com" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">The Codeletter</h3>
									</CardBody>
								</Card>
							</a>
						</div>
					</div>
					
				</CardBody>
			</Card>
						
		</section>
	);
}
