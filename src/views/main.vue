<template>
	<main>
		<div class="container">
			<!-- 시작 -->
			<template v-if="step == 'start'">
				<section class="start-banner">
					<div class="img-wrap">
						<img src="@/assets/images/main-animal.png" alt="동물 이미지" />
					</div>

					<div class="title-wrap">
						<h2 class="title">나랑 꼭 닮은 동물은?</h2>
						<p>내가 만약 동물로 태어난다면 무슨 동물일까?</p>
					</div>
					<div class="btn-wrap">
						<button
							class="button-outline"
							@click="$router.push({ name: 'all-view' })"
						>
							전체 보기
						</button>
						<button class="button-main" @click="step = 'question'">
							시작하기
						</button>
					</div>
				</section>
			</template>

			<!-- 질문 -->
			<section v-if="step == 'question'" class="question">
				<article>
					<div class="count">
						<span class="color-main">{{ count + 1 }}</span>
						<span class="color-grey">/12</span>
					</div>

					<el-progress
						:text-inside="false"
						:stroke-width="20"
						:percentage="progress"
					></el-progress>

					<div class="title-wrap">
						<h2 class="sub-title">{{ GE_QESTIONS[count].title }}</h2>
					</div>
					<button class="button-pink" @click="resultA">
						<span class="badge badge">A</span>
						<span class="button-text">
							{{ GE_QESTIONS[count].A }}
						</span>
					</button>
					<button class="button-grey" @click="resultB">
						<span class="badge badge">B</span>
						<span class="button-text">
							{{ GE_QESTIONS[count].B }}
						</span>
					</button>
				</article>
			</section>

			<!-- 결과 -->
			<template v-if="step == 'result'">
				<article v-if="c_result" class="result">
					<div class="img-wrap">
						<img :src="require(`@/assets/images/${c_result.img}`)" />
					</div>

					<div class="title-wrap">
						<h1 class="title">{{ c_result.animal }}</h1>
					</div>

					<div class="mbti">
						<strong class="pr-10">{{ c_result.explain }}</strong>
						<strong class="color-main">{{ c_result.mbti }}</strong>
					</div>

					<p>{{ c_result.features }}</p>
				</article>

				<article v-if="c_soulmate" class="soulmate">
					<h2 class="pb-20">나와 제일 잘 맞는 소울메이트는?</h2>

					<div class="bg-grey">
						<h1 class="title">{{ c_soulmate.animal }}</h1>

						<div class="mbti">
							<strong class="pr-10">{{ c_soulmate.explain }}</strong>
							<strong class="color-main">{{ c_soulmate.mbti }}</strong>
						</div>

						<div class="img-wrap">
							<img :src="require(`@/assets/images/${c_soulmate.img}`)" />
						</div>

						<p>{{ c_soulmate.features }}</p>
					</div>
				</article>

				<div v-if="count == 12">
					<button class="button-main" @click="$router.go('/')">다시하기</button>
				</div>
			</template>
		</div>
	</main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'main',
	data() {
		return {
			count: 0,
			E: 0,
			I: 0,
			S: 0,
			N: 0,
			T: 0,
			F: 0,
			J: 0,
			P: 0,
			mbti: '',
			step: 'start',
			progress: 8,
			progress_num: 1,
		}
	},
	computed: {
		...mapGetters('question', ['GE_QESTIONS']),
		...mapGetters('result', ['GE_RESULT']),

		c_result() {
			return this.GE_RESULT.find(result => result.mbti === this.mbti)
		},
		c_soulmate_mbti() {
			return this.c_result ? this.c_result.soulmate_mbti : null
		},
		c_soulmate() {
			return this.GE_RESULT.find(result => result.mbti === this.c_soulmate_mbti)
		},
	},
	mounted() {
		console.log(this.GE_QESTIONS)
	},
	methods: {
		plusProgress() {
			this.progress_num++
			this.progress = parseInt(100 / 12) * this.progress_num
		},
		resultA() {
			this.step = 'question'
			this.plusProgress()

			const result_type = this.GE_QESTIONS[this.count].type
			if (this.count < 13) {
				this.count++
				console.log(result_type)

				if (result_type == 'EI') {
					this.E++
					if (this.E == 2) {
						this.mbti += 'E'
					}
				}

				if (result_type == 'SN') {
					this.S++
					if (this.S == 2) {
						this.mbti += 'S'
					}
				}

				if (result_type == 'TF') {
					this.T++
					if (this.T == 2) {
						this.mbti += 'T'
					}
				}

				if (result_type == 'JP') {
					this.J++
					if (this.J == 2) {
						this.mbti += 'J'
					}
				}
			}
			if (this.count >= 12) {
				this.step = 'result'
			}
		},
		resultB() {
			this.step = 'question'
			this.plusProgress()

			const result_type = this.GE_QESTIONS[this.count].type

			if (this.count < 13) {
				this.count++
				console.log(result_type)

				if (result_type == 'EI') {
					this.I++
					if (this.I == 2) {
						this.mbti += 'I'
					}
				}

				if (result_type == 'SN') {
					this.N++
					if (this.N == 2) {
						this.mbti += 'N'
					}
				}

				if (result_type == 'TF') {
					this.F++
					if (this.F == 2) {
						this.mbti += 'F'
					}
				}

				if (result_type == 'JP') {
					this.P++
					if (this.P == 2) {
						this.mbti += 'P'
					}
				}
			}

			if (this.count >= 11) {
				this.step = 'result'
			}
		},
	},
}
</script>

<style scoped>
.start-banner {
	text-align: center;
}

.start-banner .img-wrap {
	padding: 30px;
}

.start-banner .btn-wrap {
	padding: 30px 0;
}

.mbti {
	padding: 10px 0;
}

.bg-grey {
	padding: 30px;
	border-radius: 5px;
}

.result {
	border-bottom: 1px solid #e5e5e5;
	margin-bottom: 50px;
}

.count {
	text-align: center;
	margin-bottom: 10px;
}
</style>
